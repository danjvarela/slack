import Header from "layouts/Header";
import NewMessageForm from "features/messages/components/NewMessageForm";

const SidebarHeader = () => {
  return (
    <Header size="sm" variant="outlined" px={0}>
      <NewMessageForm />
    </Header>
  );
};

export default SidebarHeader;
