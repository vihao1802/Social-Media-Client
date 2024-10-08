"use client";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import AvatarName from "../shared/AvatarName";
import { useEffect, useState } from "react";
import { Friends } from "@/types";

const leftBarWidth = "350px";

function timeAgo(itemDate: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - itemDate.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  } else if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  } else {
    return `${diffInYears} year${diffInYears === 1 ? "" : "s"} ago`;
  }
}

interface LeftSideBarMessagesProps {
  onChatFriendItemSelect: (data: Friends) => void;
}

const listFriends: Friends[] = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "Hey, long time no see!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    title: "Project Manager",
    subtitle: "Let's catch up soon.",
    date: new Date("2020-09-20T14:30:00"),
  },
  {
    id: 2,
    name: "Bob Williams",
    text: "Don't forget the meeting tomorrow.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    title: "Software Engineer",
    subtitle: "Meeting at 10:00 AM.",
    date: new Date("2023-09-21T09:45:00"),
  },
  {
    id: 3,
    name: "Catherine Lee",
    text: "Can you review my code?",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    title: "Frontend Developer",
    subtitle: "Need feedback on the UI.",
    date: new Date("2023-09-19T11:20:00"),
  },
  {
    id: 4,
    name: "Daniel Kim",
    text: "Happy Birthday!",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    title: "Data Analyst",
    subtitle: "Wishing you a great day!",
    date: new Date("2023-09-18T08:00:00"),
  },
  {
    id: 5,
    name: "Ella Parker",
    text: "Let's go for lunch.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    title: "Product Designer",
    subtitle: "How about sushi?",
    date: new Date("2023-09-17T12:15:00"),
  },
  {
    id: 6,
    name: "Frank Harris",
    text: "I'll send the report by EOD.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    title: "Marketing Specialist",
    subtitle: "Almost done with the report.",
    date: new Date("2023-09-16T15:45:00"),
  },
  {
    id: 7,
    name: "Grace Adams",
    text: "Can we reschedule the call?",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    title: "Sales Manager",
    subtitle: "Let me know your availability.",
    date: new Date("2023-09-15T10:30:00"),
  },
  {
    id: 8,
    name: "Harry Brown",
    text: "The project deadline is next week.",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    title: "Backend Developer",
    subtitle: "We need to finalize the API.",
    date: new Date("2023-09-14T13:00:00"),
  },
  {
    id: 9,
    name: "Isabella Davis",
    text: "I'll be on vacation next week.",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    title: "HR Manager",
    subtitle: "Please contact John for any HR-related queries.",
    date: new Date("2023-09-13T16:00:00"),
  },
  {
    id: 10,
    name: "Jack Miller",
    text: "Can you join the team meeting?",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    title: "DevOps Engineer",
    subtitle: "We need to discuss infrastructure updates.",
    date: new Date("2023-09-12T11:30:00"),
  },
];

const LeftSideBarMessages = ({
  onChatFriendItemSelect,
}: LeftSideBarMessagesProps) => {
  const [selectedChatFriendItem, setSelectedChatFriendItem] =
    useState<Friends | null>(listFriends[0]);

  const handleSelect = (data: Friends) => {
    setSelectedChatFriendItem(data);
    onChatFriendItemSelect(data);
  };

  useEffect(() => {
    if (selectedChatFriendItem) onChatFriendItemSelect(selectedChatFriendItem);
  }, []);

  return (
    <Box
      sx={{
        width: leftBarWidth,
        height: "100%",
        borderRight: "2px solid #c7c5c5",
      }}
    >
      <Box
        sx={{
          padding: "16px 20px",
          height: "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "Left",
          }}
        >
          Chats
        </Typography>
      </Box>

      <Box
        sx={{
          height: "calc(100vh - 70px)",
        }}
      >
        <List
          sx={{
            height: "100%",
            overflowY: "auto",
            padding: "0",
            "::-webkit-scrollbar": { width: "10px" },
            "::-webkit-scrollbar-track": {
              background: "#f1f1f1",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#858585",
            },
            "::-webkit-scrollbar-thumb:hover": {
              background: "#777",
            },
          }}
        >
          {/* Chat Items Skeleton */}
          {/* <Box
            sx={{
              display: "flex",
              paddingLeft: "10px",
              paddingRight: "20px",
              paddingTop: "10px",
              height: "70px",
            }}
          >
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{
                margin: "0 10px",
              }}
              animation="wave"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "calc(100% - 60px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingBottom: "10px",
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ fontSize: "1rem", width: "140px" }}
                  animation="wave"
                />
                <Skeleton
                  variant="rounded"
                  sx={{ fontSize: "1rem", width: "65px", marginLeft: "auto" }}
                  animation="wave"
                />
              </Box>
              <Skeleton
                variant="rounded"
                sx={{ fontSize: "17px", width: "100%" }}
                animation="wave"
              />
            </Box>
          </Box> */}
          {listFriends.map((item: Friends, index: number) => (
            <Box key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: "black",
                    height: "70px",
                    padding: "0",
                    alignItems: "start",
                    paddingLeft: "10px",
                    paddingRight: "20px",
                    paddingTop: "10px",
                    backgroundColor:
                      selectedChatFriendItem &&
                      item.id === selectedChatFriendItem.id
                        ? "#EEF0F2"
                        : "white",
                  }}
                  onClick={() => handleSelect(item)}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      padding: "0 10px",
                    }}
                  >
                    <AvatarName name={item.name} />
                  </Box>
                  <Box
                    sx={{
                      width: "calc(100% - 60px)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "black",
                          flex: 1,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingBottom: "5px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "#9595AF",
                        }}
                      >
                        {timeAgo(item.date)}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        color: "#555555",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default LeftSideBarMessages;
