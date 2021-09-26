import axios from 'axios';

const { WEBFLOW_CMS_API_TOKEN } = process.env;

export const cmsClient = axios.create({
  baseURL: 'https://api.webflow.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'accept-version': '1.0.0',
    Authorization: `Bearer ${WEBFLOW_CMS_API_TOKEN}`,
  },
});
