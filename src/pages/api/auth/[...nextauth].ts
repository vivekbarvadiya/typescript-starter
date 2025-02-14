// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// export const authOptions = {
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           type: "email",
//           label: "email",
//           placeholder: "Enter your email",
//         },
//         password: { type: "password", label: "password" },
//       },

//       async authorize(credentials) {
//           if(!credentials?.email || !credentials.password){
//             return new Error("Email and Password required");
//           }

//           const user = await prisma.user.findUnique({
//             where:{
//               email: credentials.email
//             }
//           })

//           if(!user){
//             return new Error("No user found with this email");
//           }

//           const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password);

//           if(!isPasswordCorrect) return new Error("Wrong Password");

//           return {id:user.id, email: user.email, name: user.name}
//       },
//     }),
//   ],
//   session:{
//     strategy:"jwt"
//   },
//   callbacks:{
//     async jwt({token,user}){
//       if(user){
//         token.id=user.id
//       }
//       return token
//     }
//     async session({session,token}){
//       if(session.user){
//         session.user.id=token.id as string
//       }
//       return session
//     }
//   }
// };

// export default NextAuth(authOptions);
