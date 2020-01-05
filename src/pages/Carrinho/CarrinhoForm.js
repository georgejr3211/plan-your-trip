import React from 'react';
import { Input, Radio, Row, Col, InputNumber, Checkbox, Button } from 'antd';
import UploadFile from '../../components/UploadFileComponent';
import { Container, Form } from './style';

const CarrinhoForm = ({ form }) => {
  const {
    getFieldDecorator,
  } = form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 6 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 12 },
      sm: { span: 12 },
    },
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('deu submit');
  };

  return (
    <Container>
      <h1>Adicionar item ao carrinho</h1>

      <Form {...formItemLayout} onSubmit={e => handleSubmit(e)}>
        <Form.Item label='Nome'>
          {getFieldDecorator('nome', {
            rules: [
              {
                required: true,
                message: 'Por favor digite o que você deseja comprar.',
              },
            ],
          })(
            <Input
              autoComplete='off'
              placeholder='O que você deseja comprar?'
            />
          )}
        </Form.Item>
        <Form.Item label='Preço estimado'>
          {getFieldDecorator('preco-estimado')(
            <InputNumber
              style={{ width: 250 }}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          )}
        </Form.Item>
        <Form.Item label='Preço pago'>
          {getFieldDecorator('preco-pago')(
            <InputNumber
              style={{ width: 250 }}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
            />
          )}
        </Form.Item>

        <Form.Item label='Prioridade'>
          {getFieldDecorator('prioridade', {
            rules: [
              {
                required: true,
                message: 'Por favor selecione a prioridade',
              },
            ],
          })(
            <Radio.Group>
              <Radio.Button value='a'>Baixa</Radio.Button>
              <Radio.Button value='b'>Média</Radio.Button>
              <Radio.Button value='c'>Alta</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item label='Produto adquirido'>
          {getFieldDecorator('produto-adquirido')(<Checkbox />)}
        </Form.Item>
        <Form.Item label='Observação'>
          {getFieldDecorator('observacao')(<Input.TextArea />)}
        </Form.Item>

        <Form.Item label='Foto do Produto'>
          <UploadFile name='img_produto' showUploadList={false} />

          <Row type='flex' gutter={20} style={{ marginTop: 30 }}>
            <Col>
              <Button type='primary' htmlType='submit'>
                Salvar
              </Button>
            </Col>
            <Col>
              <Button>Limpar</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Container>
  );
};

const WrappedHorizontalLoginForm = Form.create({ name: 'carrinho_form' })(
  CarrinhoForm
);

export default WrappedHorizontalLoginForm;
