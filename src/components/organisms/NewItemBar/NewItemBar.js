import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';
import withContext from '../../../hoc/withContext';
import { addItem as addItemAction } from '../../../actions';

const StyledWrapper = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px 20px;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 20px 0 40px 0;
  min-height: 300px;
  border-radius: 20px;
  resize: none;
`;

const StyledInput = styled(Input)`
  margin: 10px 0 10px 0;
  border-radius: 50px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible}>
    <Heading>Create new {pageContext}</Heading>
    <Formik
      initialValues={{
        title: '',
        articleUrl: '',
        twitterName: '',
        content: '',
        create: '',
      }}
      onSubmit={(values) => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ handleChange, handleBlur, values, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field
            as={StyledInput}
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <Field
              as={StyledInput}
              type="text"
              name="twitterName"
              placeholder="account name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <Field
              as={StyledInput}
              type="text"
              name="articleUrl"
              placeholder="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            as="textarea"
            placeholder="note"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activeColor={pageContext}>
            Add
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
