import { Adapter, AdapterSession, AdapterUser } from "next-auth/adapters";

const data: { user: AdapterUser; session: AdapterSession } = {
  user: { id: "test", name: "test", email: "test", emailVerified: new Date() },
  session: { sessionToken: "test", userId: "test", expires: new Date() },
};

export default function MyAdapter(): Adapter {
  return {
    async createUser(user) {
      console.log(user);
      return;
    },
    async getUser(id) {
      console.log(id);
      return null;
    },
    async getUserByEmail(email) {
      console.log(email);
      return null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      console.log(providerAccountId, provider);
      return null;
    },
    async updateUser(user) {
      console.log(user);
      return data.user;
    },
    async deleteUser(userId) {
      console.log(userId);
      return;
    },
    async linkAccount(account) {
      console.log(account);
      return null;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      console.log(providerAccountId, provider);
      return null;
    },
    async createSession({ sessionToken, userId, expires }) {
      console.log(sessionToken, userId, expires);
      return data.session;
    },
    async getSessionAndUser(sessionToken) {
      console.log(sessionToken);
      return null;
    },
    async updateSession({ sessionToken }) {
      console.log(sessionToken);
      return null;
    },
    async deleteSession(sessionToken) {
      console.log(sessionToken);
      return null;
    },
    async createVerificationToken({ identifier, expires, token }) {
      console.log(identifier, expires, token);
      return null;
    },
    async useVerificationToken({ identifier, token }) {
      console.log(identifier, token);
      return null;
    },
  };
}
