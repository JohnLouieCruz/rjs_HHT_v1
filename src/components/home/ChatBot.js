import React from "react";
import ChatBots from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function ChatBot(props) {
  const config = {
    width: "400px",
    height: "600px",
    floating: true,
  };
  const options = {
    color: "#cccccc",
  };
  const steps = [
    {
      id: "Greet",
      message: "Hi I'm Mr. Pajama your virtual assistant. How may I help you?",
      trigger: "Greet1",
    },
    {
      id: "Greet1",
      message: "Lets get started!",
      trigger: "Greet2",
    },
    {
      id: "Greet2",
      message: "What would you like to know?",
      trigger: "Displaying options",
    },
    {
      id: "Displaying options",
      options: [
        {
          value: "License",
          label: "License",
          trigger: "Asking for License",
        },
        {
          value: "Subscription",
          label: "Subscription",
          trigger: "Asking for Subscription",
        },
        {
          value: "Pricing Matrix",
          label: "Pricing Matrix",
          trigger: "Asking for Subscription",
        },
        {
          value: "Pricing Matrix",
          label: "Pricing Matrix",
          trigger: "Asking for Subscription",
        },
        {
          value: "Others",
          label: "Others",
          trigger: "Asking for Subscription",
        },
      ],
    },
    {
      id: "Asking for Subscription",
      message: "Do you want to Subscribe?",
      trigger: "Asking for permission",
    },
    {
      id: "Asking for permission",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Done",
        },
        {
          value: "false",
          label: "No",
          trigger: "feedback",
        },
      ],
    },
    {
      id: "Asking for License",
      options: [
        {
          id: "get",
          value: true,
          label: "How can I get license?",
          trigger: "get",
        },
        {
          id: "upgrade",
          value: "false",
          label: "How can I upgrade License?",
          trigger: "upgrade",
        },
      ],
    },
    {
      id: "get",
      message: "Punta ka LTO lods",
      trigger: "feedback",
    },
    {
      id: "upgrade",
      message: "https://www.transport.wa.gov.au/licensing/u",
      trigger: "feedback",
    },
    {
      id: "feedback",
      message: "Was this helpful?",
      trigger: "feed back choices",
    },

    {
      id: "feed back choices",
      options: [
        {
          id: "yes",
          value: true,
          label: "Yes",
          trigger: () => {
            //props.eventHandler("mushroom");
            return "final feedback";
          },
        },
        {
          id: "no",
          value: "false",
          label: "No",
          trigger: "sorry to hear that",
        },
      ],
    },
    {
      id: "final feedback",
      message: "Thanks for your feedback.",
      trigger: "Done",
    },
    {
      id: "sorry to hear that",
      message:
        "Sorry about that. Would you like me to connect you to CHT Agent instead?",
      trigger: "Adding Corn in Pizza",
    },

    {
      id: "Adding Corn in Pizza",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            //props.eventHandler("corn");
            return "Asking for cht agent";
          },
        },
        {
          value: "false",
          label: "No",
          trigger: "Done",
        },
      ],
    },

    {
      id: "Asking for cht agent",
      options: [
        {
          value: true,
          label: "Chat with CHT Agent",
          trigger: () => {
            //props.eventHandler("veggie");
            return "Done";
          },
        },
      ],
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true,
    },
  ];
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#1b7ced",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#1b7ced",
    botBubbleSize: "20px",
    botFontColor: "#fff",
    userBubbleColor: "#073763",
    userFontColor: "#ffffff",
    bubbleOptionStyle: "#cccccc",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBots steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default ChatBot;
