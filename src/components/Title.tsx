import { Text } from 'react-native';
import Typographies from '../constants/Typographies';

type TitlePropType = {
    title: string;
};

const Title = ({ title }: TitlePropType) => {
    return <Text style={Typographies.h1}>{title}</Text>;
};

export default Title;
