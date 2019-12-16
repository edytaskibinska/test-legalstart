import React from 'react';

import Layout from '../components/layout/layout';
import Navbar from '../components/layout/navbar';
import Card from '../components/layout/card';
import UserForm from '../components/form/user_form';

/**
 * @desc    Main view definition
 * @returns {Node}
 * @constructor
 */
const MainView = () => (
  <Layout>
    <Navbar />
    <Card>
      <UserForm />
    </Card>
  </Layout>
);

export default MainView;
