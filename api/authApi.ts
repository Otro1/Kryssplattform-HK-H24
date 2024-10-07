import { auth } from "@/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User Signed in", userCredential);
    })
    .catch((error) => {
      console.log("Kunne ikke logge inn", error);
    });
};

export const signOut = async () => {
  await auth.signOut().then(() => {
    console.log("Signed out");
  });
};
