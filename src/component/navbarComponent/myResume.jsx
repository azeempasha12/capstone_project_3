import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardContent, Typography } from '@mui/material';
import  deleteTemplate  from '../../features/resume/resumeSlices'; 

function MyResume() {
  const savedTemplates = useSelector(state => state.resume.savedTemplates || []);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTemplate(id));
  };

  const handleShare = (name) => {
    const shareUrl = `https://example.com/share/${name}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out my resume: ${shareUrl}`)}`;
    const instagramUrl = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <h1 style={{ paddingTop: '80px' }}>My Resume</h1>
      {savedTemplates.length > 0 ? (
        savedTemplates.map(template => (
          <Card key={template.id} style={{ margin: '20px 0' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {template.name}
              </Typography>
              <div style={{ marginTop: '10px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: '10px' }}
                  onClick={() => handleShare(template.name)}
                >
                  Share on WhatsApp
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDelete(template.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          No saved templates available.
        </Typography>
      )}
    </div>
  );
}

export default MyResume;
