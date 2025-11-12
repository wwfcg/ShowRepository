import React from "react";
import { useState } from "react";

const Form = ({ handleSubmit, inClient, isEditing, onCancel }) => {
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
      <div style={{
        display: 'flex',
        gap: '30px',
        padding: '20px',
        margin: '0 auto'
      }}>
      <form onSubmit={onSubmit} style={{
        flex: '0 0 400px',
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        height: 'fit-content'
      }}>
        <h2 style={{
          marginBottom: '25px',
          color: '#333',
          textAlign: 'center'
        }}>
          Добавить клиента
        </h2>
         <div style={{ marginBottom: '20px' }}>
      <label 
        htmlFor="name" 
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#333',
          fontSize: '14px'
        }}
      >
        Name
      </label>
      <input
        type="text"
        name="name"
        value={client.name}
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '12px 16px',
          border: '2px solid #e1e5e9',
          borderRadius: '8px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
      />
    </div>
        <div style={{ marginBottom: '20px' }}>
      <label 
        htmlFor="surname" 
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#333',
          fontSize: '14px'
        }}
      >
        Surname
      </label>
      <input
        type="text"
        name="surname"
        value={client.surname}
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '12px 16px',
          border: '2px solid #e1e5e9',
          borderRadius: '8px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
      />
    </div>

    <div style={{ marginBottom: '25px' }}>
      <label 
        htmlFor="phone" 
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#333',
          fontSize: '14px'
        }}
      >
        Phone
      </label>
      <input
        type="text"
        name="phone"
        value={client.phone}
        onChange={handleChange}
        style={{
          width: '80%',
          padding: '12px 16px',
          border: '2px solid #e1e5e9',
          borderRadius: '8px',
          fontSize: '16px',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onFocus={(e) => e.target.style.borderColor = '#007bff'}
        onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
      />
    </div>

    <button 
      type="submit"
      style={{
        width: '100%',
        padding: '14px 20px',
        backgroundColor: isEditing ? '#28a745' : '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 5px rgba(0,123,255,0.3)'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = isEditing ? '#218838' : '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = isEditing ? '#28a745' : '#007bff'}
      onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
      onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
    >
      Добавить клиента
    </button>
   {isEditing &&( 
    <button 
          type="button"
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '14px 20px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#545b62'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#6c757d'}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
          Отмена
        </button>
   )}
      </form>
      </div>
    );
  };
  export default Form;