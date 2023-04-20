import React from 'react';
import { Card } from './Card';

export default {
  title: 'CLM/Atoms/ResourceCard',
  component: Card,
};

const Image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADWklEQVR4nO2ZTWxMURSAv/P6Fz+DBEmVigUWTRA/JYSVpbIzU1obEhuJRSUkYtudWIhESCzoTAxWNHYSBBG6svBbEsnEz7Qk/kNr3rF4nWpH38y88X6G3i95mfvuPe/ec88795w394LBYDAYDAaDwWAwTEIkX0gk9Q6wIUJdQkOU2+ldsgnAGlM/KSYPoMLGfLm2sPFCp0hh3f9EIqk69t5yE5wsGANErUDU/BEDCtfI/47xgMKKveuiUCM8Tt8bf288wK3h8iPIfg5m0MYYbGsJpm+vuBogqMkDvB3Td6FLFpJfkqXkSuG2tF0NkMfvL8NqyzIlDRA05QbdoIJzxQbYflbnWzXsB9qAxSPVz1XptWo5nt4hr33RMGAqygLxpHZaNTwBDgItQP3I1SLCIc3xNN6jO3zUMzA8e0AipR0o5wBZOAuWNcLsaVAjkP0CD97Aq49MFyGVSKle6JB0AHr7hicDtJ/XJs1xEpDWZljZNL59wUznuvMSHmYRlFOdPXozuUveuPUZdRbwtARsm31ArHnW+MmrwtchePEervXD44HRphnDwr5KFA4LTx4gylaAzIeSb2QY6MPZZWoDjrgJ/mtZYIlLfQ7IAo9FuFprk/7RwE9riIEiz1QFFaVBu57Ypbh8KSaz7YzGpjQ44pWMERbe0qDyDKDmB2tKiU6ro3Xkmf5KFAsLbzFAuKKwXKELuFFMNmfRJQBCbzG5v43u5eJLFhCLE8AnhK3tPXrYTS6e0iMCW4CPdj0nvIwRNp484PxOybYndY9CWoXuRFLXq3BM6+gDqP3O2pxFlyhbgBzC7ktxGSzWZ9QbMJ6DYM5i0LLJAIuANlHaZMhps60xR02QUXjnj5rB4WkJxJN6wLK5gTP5UiwS5WaxpVINlO0B7UndrHDUEmhthiVzYGrdxLLfhqH/HfRlwIbueErvXuyQ634p7SdlG0Cdf360NsOKecVlp9Y5MqpwPwMoB4EJDfAvZYFV4Lz5clk61/kVZbWHcULFSxCcA+5uPxGjssJcN5mos8Ck3xY3BohagaiJfFc46ixQ0gCF+/iVKlxt5wF5XA3QGBt/guMnjbHf5aizgKsBquXsLmhMECysCCsoVQujHiDK7SgVCZlbUStgMBgMBoPBEDm/AHX96H8kLrKFAAAAAElFTkSuQmCC';
const Template = () => (
  <div className='cards'>
    <Card
      buttonText='View resources card'
      title='Resources Card'
      cardImage={Image}
    />
  </div>
);

export const Default = Template.bind({});
