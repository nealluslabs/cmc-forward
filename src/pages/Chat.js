import { useEffect } from 'react';
// @mui
import { Card, Container } from '@mui/material';


// components
import Page from '../chat-src/components/Page';
import HeaderBreadcrumbs from '../chat-src/components/HeaderBreadcrumbs';
import { ChatSidebar } from '../chat-src/sections/@dashboard/chat';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInbox } from 'src/redux/actions/chat.action';

// ----------------------------------------------------------------------

export default function Chat() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    dispatch(fetchInbox(user?.id))
  }, [user])

  return (
      <Container maxWidth={'xl'}>
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
        </Card>
      </Container>
  );
}
