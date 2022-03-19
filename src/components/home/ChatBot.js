import * as React from "react";
import Button from "@mui/material/Button";
import ForumIcon from "@mui/icons-material/Forum";
import CloseIcon from "@mui/icons-material/Close";
import "@progress/kendo-theme-default/dist/all.css";
import { Popup } from "@progress/kendo-react-popup";
import { Chat, ChatMessage } from "@progress/kendo-react-conversational-ui";
const CustomChatMessage = (props) => (
  <ChatMessage {...props} dateFormat={"t"} />
);
const user = { id: 1 };
const bot = { id: 0 };
const initialMessages = [
  {
    author: bot,
    suggestedActions: [
      {
        value: "License",
        type: "reply",
      },
      {
        value: "Subscription",
        type: "reply",
      },
      {
        value: "Pricing Matrix",
        type: "reply",
      },
      {
        value: "Pricing Matrix",
        type: "reply",
      },
      {
        value: "Others",
        type: "reply",
      },
    ],
    timestamp: new Date(),
    text: "Hi! I'm Mr. Pajama your virtual assistant. How may I help you today?",
  },
];

const initialMessages2 = [
  {
    author: bot,
    suggestedActions: [
      {
        type: "reply",
        value: "How can I get licese?",
      },
      {
        type: "reply",
        value: "How can i upgrade my license?",
      },
      {
        type: "reply",
        value: "Others",
      },
    ],
    timestamp: new Date(),
    text: "Hello, this is a demo bot. I don't do much, but I can count symbols!",
  },
];

const ChatBot = () => {
  const anchor = React.useRef(null);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);

  const onClick = () => {
    setShow(!show);
  };

  const [messages, setMessages] = React.useState(initialMessages);
  const [messages2, setMessages2] = React.useState(initialMessages2);

  const addNewMessage = (event) => {
    let botResponce = Object.assign({}, event.message);
    botResponce.text = reply(event.message.text);
    botResponce.author = bot;
    setMessages((oldMessage) => [...oldMessage, event.message]);
    setTimeout(() => {
      setMessages((oldMessage) => [...oldMessage, botResponce]);
    }, 1000);
  };

  const reply = (question) => {
    let length = question.length;
    let answer = question + " contains exactly " + length + " symbols.";
    return answer;
  };

  const onAction = (event) => {
    if (event.action.type === "alert") {
      setMessages([
        ...messages,
        {
          author: user,
          text: event.action.value,
        },
      ]);
    }
  };
  return (
    <>
      <div style={{ marginTop: "45%", marginLeft: "105%" }}>
        <Button
          variant="contained"
          size="large"
          icon="comments"
          style={{ borderRadius: "45px" }}
          onClick={onClick}
          ref={anchor}
        >
          {show ? <CloseIcon></CloseIcon> : <ForumIcon></ForumIcon>}
        </Button>
      </div>

      <div>
        <Popup
          anchor={anchor.current}
          show={show}
          popupClass={"popup-content"}
          style={{ width: "38%", padding: "150px", marginLeft: "40%" }}
        >
          <div>
            <Chat
              user={user}
              messages={messages}
              onMessageSend={addNewMessage}
              placeholder={"Type a message..."}
              width={400}
              onActionExecute={onAction}
              message={CustomChatMessage}
              style={{ width: "38%", padding: "150px", marginRight: "40%" }}
              required
            />
          </div>
        </Popup>
      </div>
    </>
  );
};
export default ChatBot;
