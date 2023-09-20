import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const contact = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
        <title>@Rimzss·Contact Me</title>
      </Head>
      <main>
        <Nav />
        <div className=" text-white w-screen h-screen border-t border-neutral-500 flex flex-col items-center justify-center">
          <h3 className="text-5xl">Contact me</h3>
          <div className="m-48 text-2xl w-2/4">
            <TextField id="filled-basic" label="Your Mail" variant="filled" />
            <h4 className="mt-5"></h4>
            <TextField
              id="outlined-multiline-static"
              label="Your Message"
              multiline
              rows={4}
              fullWidth
            />
            <div>
              <Button
                className="bg-white text-black"
                variant="contained"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default contact;
