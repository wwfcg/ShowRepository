import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = ({ handleSubmit, inClient}) => {
    const [client, setClient] = useState(inClient);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setClient({ ...client, [name]: value });
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(client);
      setClient(inClient);
    };

    React.useEffect(() => {
      setClient(inClient);
    }, [inClient]);
  
    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <h2 className="form-title">
            Добавить клиента
          </h2>
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={client.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="surname" className="form-label">
              Surname
            </label>
            <input
              type="text"
              name="surname"
              value={client.surname}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={client.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <button 
            type="submit"
            className={'submit-button'}
          >
            Добавить клиента
          </button>
        </form>
      </div>
    );
  };

export default Form;