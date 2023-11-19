import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({selectedCat, setSelectedCat}) => (
    <Stack direction='row' sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%'}, flexDirection: { md: 'column'} }}>
        {categories.map((category) =>(
            <button onClick={() => setSelectedCat(category.name)} className='category-btn' style={{ background: category.name === selectedCat && '#FC1503', color: 'white'}} 
            key={category.name}>

                <span style={{ color: category.name === selectedCat ? 'white' : 'red', marginRight: '10px'}}>
                    {category.icon}
                </span>
                <span style={{ opacity: category.name === selectedCat ? '1' : '0.8'}}>
                    {category.name}
                </span>

            </button>
        ))}
    </Stack>
)

export default SideBar