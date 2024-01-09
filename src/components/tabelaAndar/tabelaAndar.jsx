import { Typography, Box } from '@mui/material';


const FloorTab = ({ title, items }) => {
    return (
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          {items.map((item) => (
            <Box key={item.img} mb={2}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="subtitle1">{item.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.author}
              </Typography>
            </Box>
          ))}
        </Box>
      );
    };

export default FloorTab