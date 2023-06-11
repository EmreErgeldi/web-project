import Image from "next/image";
import InputWithIcon from "./InputWithIcon";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { use, useEffect, useState } from "react";
import { Clear, Delete } from "@mui/icons-material";

export default function Navbar({ isLoggedIn }) {
  const loaderProp = ({ src }) => {
    return src;
  };
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ id: null, username: null, password: null });
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [login, setLogin] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [sections, setSections] = useState([]);
  const [blog, setBlog] = useState({
    title: null,
    description: null,
    enteranceText: null,
    mainImage: null,
    extraImages: null,
    subTitles: null,
    paragraphs: null,
    createdAt: null,
    createdBy: null,
    approxReadTime: 5,
    tags: null,
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLogin(false);
  };

  const handleMainImage = (e) => {
    setMainImage(e.target.value);
    e.target.value = "";
  };

  const handleSignIn = async () => {
    const reqUser = await fetch(
      "https://localhost:7030/api/User?username=" + user.username + "&password=" + user.password
    );
    const response = await reqUser.json();

    console.log(response);
    if (response.status === 404) {
      alert("User not found");
      return;
    }
    if (response.username) {
      setLoggedIn(true);
      setLogin(false);
      setUser({ id: response.id, username: response.username, password: response.password });
    }
  };

  const handlePost = () => {
    blog.createdAt = new Date().toISOString();
    blog.createdBy = user.id ? user.id : 1;
    const reqBlog = fetch("https://localhost:7030/api/Blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    setOpen(false);
    console.log(blog);
  };

  useEffect(() => {
    setBlog({
      ...blog,
      paragraphs: sections.map((section) => section.paragraphs.join(" \\/ ")).join(" || "),
      subTitles: sections.map((section) => section.title).join(" || "),
      extraImages: sections.map((section) => section.image).join(" || "),
    });
  }, [sections]);
  useEffect(() => {
    setBlog({ ...blog, mainImage: mainImage });
  }, [mainImage]);

  return (
    <div className="w-full h-12 flex items-center justify-between m-auto mt-1">
      <div className="flex items-center">
        <Link href="/">
          <div className="px-8">
            <Image src="/small-logo.svg" alt="logo" width={44} height={24} />
          </div>
        </Link>
        <InputWithIcon />
      </div>

      <div className="flex h-full items-center">
        <div className="flex items-center mx-3 hover:cursor-pointer" onClick={handleClickOpen}>
          <BorderColorOutlinedIcon fontSize="large" />
          <span className="font-normal  p-1">Write</span>
        </div>
        <div className="flex items-center mx-3 hover:cursor-pointer">
          <NotificationsNoneRoundedIcon fontSize="large" />
        </div>
        {!loggedIn && (
          <div className="flex items-center mx-3 mr-6 hover:cursor-pointer">
            <span className="font-bold" onClick={() => setLogin(true)}>
              Sign In
            </span>
          </div>
        )}
        {loggedIn && (
          <div
            className="flex items-center mx-3 mr-6 hover:cursor-pointer"
            onClick={() => {
              setUserOpen(!userOpen);
            }}
          >
            <AccountCircleIcon fontSize="large" />
            <ExpandMoreIcon fontSize="small" />
          </div>
        )}
        {userOpen && (
          <div className="absolute right-0 top-12 bg-gray-200 rounded-xl shadow-md">
            <div className="flex flex-col m-2">
              <Link href={`/user/${user.id}`} className="hover:bg-gray-400 rounded-xl p-1">
                <div className="flex items-center mx-3 hover:cursor-pointer">
                  <AccountCircleIcon fontSize="large" />
                  <span className="font-normal  p-1">Profile</span>
                </div>
              </Link>
              <hr />
              <Link href="/sign-out" className="hover:bg-gray-400 rounded-xl p-1">
                <div className="flex items-center mx-3 hover:cursor-pointer">
                  <span className="font-normal  p-1">Sign Out</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>Post a Blog</DialogTitle>
        <DialogContent className="flex flex-col">
          <Input
            placeholder="Title"
            sx={{ marginBottom: 2, fontSize: 36 }}
            onChange={(e) => {
              setBlog({ ...blog, title: e.target.value });
            }}
          />
          <Input
            placeholder="Description"
            sx={{ marginBottom: 2, fontSize: 20 }}
            onChange={(e) => {
              setBlog({ ...blog, description: e.target.value });
            }}
          />
          <Input placeholder="Image URL" sx={{ marginBottom: 2, fontSize: 12 }} onChange={handleMainImage} />
          {mainImage && (
            <div>
              <Clear
                className="hover:cursor-pointer"
                onClick={() => {
                  setMainImage(null);
                  setBlog({ ...blog, mainImage: null });
                }}
              />
              <Image
                src={mainImage}
                alt="blog image"
                width={275}
                height={275}
                loader={loaderProp}
                className="mx-auto"
              />
            </div>
          )}
          <TextField
            id="standard-textarea"
            label="Enterance Text"
            placeholder="Your story goes here..."
            multiline
            variant="standard"
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              setBlog({ ...blog, enteranceText: e.target.value });
            }}
          />
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <Delete
                className="hover:cursor-pointer"
                onClick={() => {
                  setSections(sections.filter((_, i) => i !== index));
                }}
              />
              <Input
                placeholder="Title"
                sx={{ marginBottom: 2, fontSize: 24 }}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].title = e.target.value;
                  setSections(newSections);
                }}
              />
              <TextField
                id="standard-textarea"
                label="Tell your story... (first paragraph))"
                placeholder="Your story goes here..."
                multiline
                variant="standard"
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].paragraphs[0] = e.target.value;
                  setSections(newSections);
                }}
              />
              <Input
                placeholder="Section Image URL"
                sx={{ marginBottom: 2, fontSize: 12 }}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].image = e.target.value;
                  setSections(newSections);
                  e.target.value = "";
                }}
              />
              {section.image && (
                <div>
                  <Clear
                    className="hover:cursor-pointer"
                    onClick={() => {
                      const newSections = [...sections];
                      newSections[index].image = null;
                      setSections(newSections);
                    }}
                  />
                  <Image
                    src={section.image}
                    alt="blog image"
                    width={275}
                    height={275}
                    loader={loaderProp}
                    className="mx-auto"
                  />
                </div>
              )}
              <TextField
                id="standard-textarea"
                label="Tell your story... (second paragraph)"
                placeholder="Your story goes here..."
                multiline
                variant="standard"
                sx={{ marginBottom: 2 }}
                onChange={(e) => {
                  const newSections = [...sections];
                  newSections[index].paragraphs[1] = e.target.value;
                  setSections(newSections);
                }}
              />
            </div>
          ))}
          <Button
            variant="contained"
            color="success"
            component="label"
            onClick={() => {
              setSections([...sections, { title: "", paragraphs: [], image: null }]);
            }}
          >
            + Add Section
          </Button>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Discard
          </Button>
          <Button color="success" variant="contained" component="label" onClick={handlePost} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={login} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent className="flex flex-col">
          <Input
            placeholder="Username"
            sx={{ marginBottom: 2, fontSize: 20 }}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
          <Input
            placeholder="Password"
            sx={{ marginBottom: 2, fontSize: 20 }}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="success" variant="contained" component="label" onClick={handleSignIn} autoFocus>
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
