import React from 'react';
import Header from './Header';
import './App.css';
import StaffGuide from './components/StaffGuide/StaffGuide';
import CategoryView from './components/CategoryView/CategoryView';
import { Box, Grid, Text } from '@chakra-ui/react';
import AffiliationViewButton from './components/AffiliationViewButton';
import linkIcon from './assets/link_icon.svg';
import cauIcon from './assets/CAU-logo.svg';
import puangIcon from './assets/푸앙-icon.svg';
import { Navigate } from 'react-router-dom';

export default function MainPage() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <Header />
      <Text mt={6} ml={4} fontSize="xl" fontWeight="bold">
        소속별로 보기
      </Text>
      <Grid
        templateColumns="repeat(3,1fr)"
        gap={4}
        width="full"
        padding={4}
        mx="auto"
      >
        <AffiliationViewButton
          mainText="중앙"
          subText="동아리 연합회 소속"
          icon={cauIcon}
        ></AffiliationViewButton>
        <AffiliationViewButton
          mainText="단과대/학과"
          subText="단과대/학과(부) 소속"
          icon={linkIcon}
        ></AffiliationViewButton>
        <AffiliationViewButton
          mainText="그 외"
          subText="준 동아리, 학회, 스터디 등"
          icon={puangIcon}
        ></AffiliationViewButton>
      </Grid>
      <StaffGuide />
      <Text mt={6} ml={4} fontSize="xl" fontWeight="bold">
        카테고리별로 보기
      </Text>
      <CategoryView />
    </Box>
  );
}
