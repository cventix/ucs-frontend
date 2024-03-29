import axios from 'axios';
import { useQuery } from 'react-query';

const useBlogMutation = (initialdata) => {
  return useQuery('blog', () => axios.get('api/cms/blog'), initialdata);
};

const useEditorsPicksMutation = () => {
  return useQuery('editors-picks', () => axios.get('api/cms/editors-picks'));
};

const usePodcastMutation = () => {
  return useQuery('podcasts', () => axios.get('api/cms/podcasts'));
};

const useThematicMutation = () => {
  return useQuery('thematic', () => axios.get('api/cms/thematic'));
};

const useTransformedMutation = () => {
  return useQuery('transformed', () => axios.get('api/cms/china-transformed'));
};
export { useBlogMutation, useEditorsPicksMutation, usePodcastMutation, useThematicMutation, useTransformedMutation };
