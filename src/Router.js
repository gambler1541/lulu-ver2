import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './papes/Main';
import Registration from './papes/registration/Registration';
import Inquiry from './papes/inquiry/Inquiry';
import { useState, useEffect } from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="registration" element={<Registration />} />
        <Route path="inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
