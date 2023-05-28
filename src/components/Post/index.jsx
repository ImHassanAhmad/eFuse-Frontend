import { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Avatar from "@mui/material/Avatar";
import Profile from "../../assets/profile.jpg";
import InputBase from "@mui/material/InputBase";
import { useCreatePostMutation } from "../../service/posts";

export default function Post() {
  const [createPost, result] = useCreatePostMutation();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        maxWidth: "800px",
        width: "95vw",
        height: "max-content",
        margin: "40px 0",
      }}
    >
      <CardContent>
        <div
          style={{
            padding: "5px 10px",
            marginBottom: "10px",
            display: "flex",
            gap: "20px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={Profile}
            sx={{ width: 56, height: 56 }}
          />
          <InputBase
            placeholder="Whats on your mind?"
            onChange={handleInputChange}
            sx={{
              width: "100%",
              "& input::placeholder": {
                color: "#919eb2",
                fontWeight: "700",
                fontSize: "1.25rem",
              },
            }}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            padding: "5px 10px",
          }}
        >
          <Chip
            icon={
              <PhotoLibraryIcon style={{ color: "white", padding: "3px" }} />
            }
            label="Photos/Videos"
            variant="outlined"
            clickable
            sx={{
              background: "black",
              color: "white",
            }}
          />
          <Button
            variant="contained"
            size="small"
            style={{
              background: "#8fb1f7",
            }}
            onClick={() => {
              let body = {
                user: localStorage.getItem("user"),
                title: "title",
                content: inputValue,
              };
              createPost(body);
            }}
          >
            Post it
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
