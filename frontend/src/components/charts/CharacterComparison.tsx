import { ResponsiveRadar } from '@nivo/radar';
import { Box, Typography } from '@mui/material';
import { usePeopleList } from '../../hooks/use-people';

export const CharacterComparison = () => {
  const { people } = usePeopleList();

  const chartData = people?.slice(0, 5).map(person => ({
    character: person.name,
    height: parseInt(person.height) || 0,
    mass: parseInt(person.mass) || 0,
    films: person.films.length,
    vehicles: person.vehicles.length,
    starships: person.starships.length,
  })) || [];

  return (
    <Box sx={{ height: 400 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Character Attributes Comparison
      </Typography>
      <ResponsiveRadar
        data={chartData}
        keys={['height', 'mass', 'films', 'vehicles', 'starships']}
        indexBy="character"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
    </Box>
  );
}; 