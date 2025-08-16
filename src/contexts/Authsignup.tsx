import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  User
} from "firebase/auth";

interface AuthContextType {
  currentUser: User | null;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
  signInWithGoogle: () => Promise<User>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [generatedOtp, setGeneratedOtp] = useState<string>("");

  // 🔹 Track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  // 🔹 Login
  const login = async (email: string, password: string) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return userCred.user;
  };

  // 🔹 Signup with email/password and send OTP
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // Generate mock OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(otp);

      console.log("📧 OTP sent to email:", otp); // Replace with backend mail service

      // Set displayName
      await updateProfile(userCred.user, { displayName: name });

      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  // 🔹 Verify OTP
  const verifyOtp = async (_email: string, otp: string): Promise<boolean> => {
    if (otp === generatedOtp) {
      console.log("✅ OTP Verified");
      return true;
    }
    return false;
  };

  // 🔹 Google Auth (Redirect style)
  const signInWithGoogle = async () => {
    await signInWithRedirect(auth, googleProvider);
    const result = await getRedirectResult(auth);
    if (result) return result.user;
    throw new Error("Redirect failed");
  };

  // 🔹 Logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, verifyOtp, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
