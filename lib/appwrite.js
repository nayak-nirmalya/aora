import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.nirmalya.aora",
  projectId: "aora-react-native-expo",
  databaseId: "aora-db",
  userCollectionId: "users",
  videoCollectionId: "videos",
  storageId: "files",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.error("[CreateUser]", error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const sesion = await account.createEmailSession(email, password);

    return sesion;
  } catch (error) {
    console.error("[SignIn]", error);
    throw new Error(error);
  }
};
