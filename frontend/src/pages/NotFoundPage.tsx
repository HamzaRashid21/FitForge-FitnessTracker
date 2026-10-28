import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import { Container } from '../components/ui/Container.js';
import { EmptyState } from '../components/feedback/EmptyState.js';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container size="md">
      <EmptyState
        icon={<FileQuestion size={48} />}
        title="404 — Page Not Found"
        description="The page you are looking for does not exist or may have been relocated. Verify the requested URL or return to the overview."
        actionLabel="Back to Home"
        onAction={() => navigate('/')}
      />
    </Container>
  );
};
