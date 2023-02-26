import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { StepSwitcher } from './StepSwitcher';
import { registerSchema } from '../../schemas/authValidationSchemas';
import { register, login } from 'redux/auth/authOperations';
import {
  FlexBox,
  FormWrapper,
  Heading,
  Form,
  Text,
  Link,
  Button,
} from './RegisterForm.styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState('0');

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    location: '',
    phone: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      location: values.location,
      phone: values.phone,
    };
    console.log(newUser);
    try {
      const data = await dispatch(register(newUser));
      console.log(data);
      if (data.type === 'auth/register/fulfilled') {
        await dispatch(
          login({ email: values.email, password: values.password })
        );
        resetForm();
        setPage('0');
      }
    } catch (error) {
      toast.error(
        i18n.t('t_samething_wrong') + ` - ${error.response.data.message}`
      );
    }
  };

  return (
    <FlexBox type={page}>
      <FormWrapper type={page}>
        <Heading>{t('Registration')}</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form>
              {<StepSwitcher page={page} setPage={setPage} />}
              {page === '0' && (
                <Button
                  type="button"
                  disabled={!(formik.dirty && formik.isValid)}
                  onClick={() => setPage('1')}
                >
                  {t('Next')}
                </Button>
              )}
              {page === '1' && (
                <Button
                  type="button"
                  disabled={!(formik.dirty && formik.isValid)}
                  onClick={() => setPage('0')}
                >
                  {t('Back')}
                </Button>
              )}
              <Text>
                {t('have_account')}? <Link to="/login">{t('Login')}</Link>
              </Text>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </FlexBox>
  );
};
