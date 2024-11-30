import axiosInstance from "./axios-instance";
import { ChatGroup, ChatGroupPagination } from "@/models/chat-group";

const prefix = "/groupchat";

export const chatGroupApi = {
  async getGroupChatByMe() {
    // this response include latest message of the group
    const res = await axiosInstance.get<ChatGroupPagination>(
      `${prefix}/me/get-all`
    );

    return res.data;
  },
  async getGroupChatById(groupId: string) {
    const res = await axiosInstance.get<ChatGroup>(
      `${prefix}/GetById/${groupId}`
    );

    return res.data;
  },
};