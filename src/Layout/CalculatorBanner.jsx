import { useState } from 'react';
import { Modal, InputNumber, Form, Button, Grid } from 'antd';
import { Calculator } from 'lucide-react';
import foto11 from '../assets/foto11.png';



export default function CalculatorBanner() {

    const { useBreakpoint } = Grid;

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [totalCost, setTotalCost] = useState(null);

    const showModal = () => setOpen(true);
    const handleClose = () => {
        form.resetFields();
        setTotalCost(null);
        setOpen(false);
    };

    const onFinish = (values) => {
        const { area, floors, wallHeight, pricePerM2 } = values;
        const totalVolume = area * wallHeight * floors;
        const total = totalVolume * pricePerM2;
        setTotalCost(total.toFixed(2));
    };

    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const buttonWidth = isMobile ? '100%' : '50%';

    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 text-center text-md-start">
                    <img
                        src={foto11}
                        alt="Дом"
                        className="img-fluid rounded-3"
                    />
                </div>


                <div className="col-12 col-md-6 mt-5 mt-md-0">
                    <h2 className="display-4 mb-4" style={{ fontWeight: 700, fontSize: '2.0rem' }}>
                        РАССЧИТАЙТЕ СТОИМОСТЬ ДОМА
                    </h2>
                    <p className="text-muted mb-3">
                        Знаете общую площадь дома, высоту стен и количество этажей?
                    </p>
                    <p className="text-muted mb-4 w-75">
                        Рассчитайте количество и стоимость материалов с помощью удобного калькулятора.
                        Гарантируем точный расчет с учетом запаса и погрешностей.
                    </p>
                    <Button
                        type="primary"
                        danger
                        onClick={showModal}
                        size="large"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            width: buttonWidth,
                        }}
                    >
                        Открыть калькулятор <Calculator size={20} />
                    </Button>
                </div>
            </div>



            <Modal
                open={open}
                onCancel={handleClose}
                footer={null}
                title="Калькулятор стоимости"
                width={700}
            >
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    <Form.Item
                        label="Общая площадь дома (м²)"
                        name="area"
                        rules={[{ required: true, message: 'Введите площадь' }]}
                    >
                        <InputNumber min={1} className="w-100" />
                    </Form.Item>
                    <Form.Item
                        label="Количество этажей"
                        name="floors"
                        rules={[{ required: true, message: 'Введите этажей' }]}
                    >
                        <InputNumber min={1} className="w-100" />
                    </Form.Item>
                    <Form.Item
                        label="Высота стен (м)"
                        name="wallHeight"
                        rules={[{ required: true, message: 'Введите высоту стен' }]}
                    >
                        <InputNumber min={1} step={0.1} className="w-100" />
                    </Form.Item>
                    <Form.Item
                        label="Цена за м³ материала (в рублях)"
                        name="pricePerM2"
                        rules={[{ required: true, message: 'Введите цену' }]}
                    >
                        <InputNumber min={1} className="w-100" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary" danger
                            htmlType="submit"
                            className="w-100"
                        >
                            Рассчитать
                        </Button>
                    </Form.Item>

                    {totalCost && (
                        <div className="bg-success text-white p-4 rounded text-center font-semibold">
                            Примерная стоимость строительства: <br /> {totalCost} ₽
                        </div>
                    )}
                </Form>
            </Modal>
        </div>
    );
}
