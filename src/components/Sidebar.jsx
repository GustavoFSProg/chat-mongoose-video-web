import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import useAuthStore from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { MessageSquareDiffIcon, Users } from "lucide-react";

import userContext from "../Contexts/userContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import api from "../api";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  const [dados, setDados] = useState([]);
  const [mydados, setMyDados] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [myusers, setMyUsers] = useState({});
  // const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const { user, setIsSignup, isSignup, setUser } = useContext(userContext);
  
  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user.id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  // biome-ignore lint/suspicious/noConfusingLabels: <explanation>
  // biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
  // getMessages: async (user) => {

  async function getMessages() {
    // set({ isMessagesLoading: true });
    // const {receiverId} = "67ef9b13-e594-4124-9058-1094897f224e"
    try {
      // const id = req.params.id

      const userId =  "67ef9b13-e594-4124-9058-1094897f224e"
      const id = "5dfceb12-c370-4237-8e05-8a0ec1bb3d54"

      const { data } = await api.get(`/get-messages/${id}`, userId);
      console.log(`Data: ${data}` )

      setDados(data.user1);

      setMyDados(data.user2)

      console.log(`dados: ${dados}`);
    } catch (error) {
      // toast.error(error);
      console.log(`error: ${error}`);
    }
  }


  async function getSidebarContacts() {
      // set({ isMessagesLoading: true });
      // const {receiverId} = "67ef9b13-e594-4124-9058-1094897f224e"
      try {
        // const id = req.params.id
  
        const id =  "67ef9b13-e594-4124-9058-1094897f224e"
  
        const { data } = await api.get(`/get-one-chat/${id}`);
        console.log(`Data-contacts: ${data }` )
  
        setContacts(data);
  
        console.log(`contacst: ${contacts}`);
      } catch (error) {
        // toast.error(error);
        console.log(`error: ${error}`);
      }
    }


  async function handleUser(id) {
    // set({ isMessagesLoading: true });
    // const {receiverId} = "67ef9b13-e594-4124-9058-1094897f224e"
    try {
      // const id = req.params.id


      const { data } = await api.get(`/get-one-user/${id}`);
      // console.log(`Data-contacts: ${data }` )

      setMyUsers(data.profilePic);

      console.log(`myusers: ${myusers.profilePic}`);
    } catch (error) {
      // toast.error(error);
      console.log(`error: ${error}`);
    }
  }
  

  useEffect(() => {
    // getMessages(); 
    getSidebarContacts()
  }, []);

  return (
    <aside className="h-full w-full lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show online only</span>
          </label>
          {/* <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span> */}
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 text-white">
        {/* <h1 style={{color: 'green', fontSize: '24px'}}>Olá, {user.fullname}</h1> */}
        <br />
        <br />
       
      
       
          
            <div className="relative mx-auto lg:mx-0">
              {/* {myusers.map(item => {
                 return ( 

                   <div key="">
                 <img src={item.profilePic} width="100" alt="imagem"/>
                </div>
                  )
              })} */}

              <p>PORRA</p>
              <img src={myusers} alt="imagem" width='100'/>
            {contacts.map((items) => {
              return (
                <>
              <div key="id">
                {/* <img src={items.}/> */}
               
                {/* <p>Olá {user.nameUser1}</p> */}
                <p>{items.user2}</p>
                <button type="button" onClick={() => handleUser(items.user2)}>Botão</button>
                <br/>
              </div>
            </>
          )})}

        
{/*               
            </div> 

         <div className="hidden lg:block text-left min-w-0"> */}

              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
      
              </div>
            </div>
          
        {/* ))} */}
{/* 
        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No online users</div>
        )} */}
      </div>
                
      {dados.map((user) => {
          return (
            <>
              <div key="id">
               
                {/* <p>Olá {user.nameUser1}</p> */}
                <p>{user.text}</p>
                <br/>
              </div>
            </>
          );
        })}

{mydados.map((user) => {
          return (
            <>
              <div key="id">
               
                {/* <p>Olá {user.nameUser1}</p> */}
                <p>{user.text}</p>
                <br/>
              </div>
            </>
          );
        })}
    </aside>
  );
};
export default Sidebar;
