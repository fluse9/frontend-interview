'use client'

import { useEffect, useState } from "react";
import axios from 'axios';

interface FormData {
  title?: string;
  name?: string;
  email?: string;
  country?: string;
}

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [inputsWithError, setInputsWithError] = useState<FormData>({});
  const [summary, setSummary] = useState<FormData>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const fetchCountries = async () => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      const processedCountries = data.map((datum:any) => ({
        name: datum?.name?.common,
        countryCode: datum?.cca2,
      }));

      setCountries(processedCountries);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleName = (event:any) => setName(event?.target?.value)

  const handleEmail = (event:any) => setEmail(event?.target?.value);

  const handleSelectedCountry = (event:any) =>
    setSelectedCountryCode(event?.target?.value);

  const handleSubmit = (event:any) => {
    event.preventDefault();

    console.log(name);
    console.log(email);
    console.log(selectedCountryCode);

    const missingName = !name;
    const missingEmail = !email;
    const missingCountry = !selectedCountryCode;

    if (missingName || missingEmail || missingCountry) {
      setInputsWithError({
        ...inputsWithError,
        ...(missingName && {name: 'Name is required'}),
        ...(missingEmail && { email: 'Email is required' }),
        ...(missingCountry && { country: 'Country is required' }),
      });
    } else {
      console.log('Submitted');

      setSummary({
        title: 'Summary',
        name,
        email,
        country: selectedCountryCode,
      });
      setInputsWithError({});
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ color: inputsWithError.name ? 'red' : 'black' }}>Name</label>
        {inputsWithError.name ? <p style={{ color: 'red '}}>{inputsWithError.name}</p> : null}
        <input type="text" onChange={handleName} style={{ width: '100%', border: `1px solid ${inputsWithError.name ? 'red' : 'black'}` }} value={name} />
        <label style={{ color: inputsWithError.email ? 'red' : 'black' }}>Email</label>
        {inputsWithError.email ? <p style={{ color: 'red '}}>{inputsWithError.email}</p> : null}
        <input type="email" onChange={handleEmail} style={{ width: '100%', border: `1px solid ${inputsWithError.email ? 'red' : 'black'}` }} value={email} />
        <label style={{ color: inputsWithError.country ? 'red' : 'black' }}>Country</label>
        {inputsWithError.country ? <p style={{ color: 'red '}}>{inputsWithError.country}</p> : null}
        <select style={{ width: '100%', border: `1px solid ${inputsWithError.country ? 'red' : 'black'}` }} onChange={handleSelectedCountry} value={selectedCountryCode}>
          <option>Select a Country</option>
          {countries.map(({ name, countryCode }) => <option value={countryCode}>{name}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
      <h2>{summary.title}</h2>
      <p>Name: {summary.name}</p>
      <p>Email: {summary.email}</p>
      <p>Country: {summary.country}</p>
    </main>
  );
}
