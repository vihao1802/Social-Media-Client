"use client";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Post } from "@/models/post";
import ProfileCardImage from "./ProfileCardImage";
import { useGetMediaContentByPostId } from "@/hooks/media-content/useGetMediaContentByPostId";
import { useState } from "react";

interface ProfileBottomContentProps {
  posts: Array<Post>;
}

const ProfileBottomContent = ({ posts }: ProfileBottomContentProps) => {
  const [isPostTab, setIsPostTab] = useState(true);

  const { data: mediaContentData } = useGetMediaContentByPostId({
    postId: posts.length > 0 ? posts[0].id : 0,
    enabled: posts.length > 0,
  });

  return (
    <Box
      sx={{
        marginTop: "50px",
        borderTop: "2px solid #e7e7e7",
      }}
    >
      {/* Tab panel */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            padding: "10px 16px",
            borderTop: isPostTab ? "2px solid black" : "2px solid #e7e7e7",
            color: isPostTab ? "black" : "GrayText",
            cursor: "pointer",
          }}
          onClick={() => setIsPostTab(true)}
        >
          <CameraAltOutlinedIcon />
          <Typography>Posts</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            padding: "10px 16px",
            borderTop: !isPostTab ? "2px solid black" : "2px solid #e7e7e7",
            color: !isPostTab ? "black" : "GrayText",
            cursor: "pointer",
          }}
          onClick={() => setIsPostTab(false)}
        >
          <PlayCircleOutlinedIcon />
          <Typography>Reels</Typography>
        </Box>
      </Box>
      {/* Posts and reels */}
      {isPostTab ? (
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridAutoRows: "1fr",
            gap: "5px",
            marginTop: "20px",
          }}
        >
          {posts.map((post: Post, index: number) => (
            <ProfileCardImage key={index} post={post} />
          ))}
        </Box>
      ) : null}
    </Box>
  );
};

export default ProfileBottomContent;
