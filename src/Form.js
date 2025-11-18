import React from "react";
import { useState, useEffect } from "react";
import "./Form.css";

const Form = ({ handleSubmit, inClient, isEditing = false, onCancel = null }) => {
    const [client, setClient] = useState(inClient);

    useEffect(() => {
      setClient(inClient);
    }, [inClient]);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setClient({ ...client, [name]: value });
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      handleSubmit(client);
      setClient(inClient);
    };
  
    return (
      <div className="form-container">
        <form onSubmit={onSubmit} className="form">
          <h2 className="form-title">
            Add new client
          </h2>
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={client.name.value}
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
              value={client.surname.value}
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

          <div>
            <button type="submit" className="submit-button">
              {isEditing ? 'Сохранить' : 'Добавить'}
            </button>

            {isEditing && onCancel && (
              <button 
                type="button"
                onClick={onCancel}
                className="cancel-button"
              >
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };

export default Form;