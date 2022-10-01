import {AuthContextProvider} from "context/AuthContextProvider";
import {ChannelContextProvider} from "context/ChannelContextProvider";
import {UserContextProvider} from "context/UserContextProvider";
import {MessageContextProvider} from "context/MessageContextProvider";
import {ReceiverContextProvider} from "context/ReceiverContextProvider";

const ProvidersWrapper = ({children}) => {
  return (
    <AuthContextProvider>
      <ChannelContextProvider>
        <UserContextProvider>
          <MessageContextProvider>
            <ReceiverContextProvider>{children}</ReceiverContextProvider>
          </MessageContextProvider>
        </UserContextProvider>
      </ChannelContextProvider>
    </AuthContextProvider>
  );
};

export default ProvidersWrapper;
