import React from "react";
import ChatBots from "react-simple-chatbot";
import Concern from "./Concern";
import pofsis from "../../assets/images/icons/pofsis1.png"
import { ThemeProvider } from "styled-components";

const ChatBot =()=> {
  const config = {
    width: "400px",
    height: "600px",
    hideSubmitButton: true,
    placeholder: "",
    headerTitle:"Pofchat",
    customDelay:1500,
    floating: true,
  };

  const steps = [
    {
      id: "Header",
      trigger: "Greet",
      component: ( <Concern/> ),
    },
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
          trigger: "pricing",
        },
        {
          value: "Others",
          label: "Others",
          trigger: "Asking for Subscription",
        },
      ],
    },
    //questions
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
          trigger: "subscribe",
        },
        {
          value: "false",
          label: "No",
          trigger: "feedback",
        },
      ],
    },
    //answers
    {
      id: "get",
      component: <a href="https://www.transport.wa.gov.au/licensing/learn-to-drive-my-first-licence.asp" target="https://www.transport.wa.gov.au/licensing/learn-to-drive-my-first-licence.asp">www.transport.wa.gov.au/licensing/learn-to-drive-my-first-licence.asp</a>,
      trigger: "feedback",
    },
    {
      id: "upgrade",
      component: <a href="https://www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp" target="https://www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp">www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp</a>,
      trigger: "feedback",
    },
    {
      id: "subscribe",
      component: <a href="https://www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp" target="https://www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp">www.transport.wa.gov.au/licensing/upgrade-add-a-licence.asp</a>,
      trigger: "feedback",
    },
    {
      id: "pricing",
      component: <a href="https://www.transport.wa.gov.au/aboutus/fees-grants-and-subsidies.asp" target="https://www.transport.wa.gov.au/aboutus/fees-grants-and-subsidies.asp">www.transport.wa.gov.au/aboutus/fees-grants-and-subsidies.asp</a>,
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
        "Sorry about that. Would you like me to connect you to HHT Agent instead?",
      trigger: "Pass to agent",
    },
    {
      id: "Pass to agent",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: () => {
            //props.eventHandler("corn");
            return "Asking for hht agent";
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
      id: "Asking for hht agent",
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
      end: true
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
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBots steps={steps} {...config}
       botAvatar={pofsis} 
       bubbleOptionStyle={{ backgroundColor:'#01ffff', color:'black' }}
       />
    </ThemeProvider>
  );
}
export default ChatBot;