import { Checkbox, Box, Text } from '@chakra-ui/react';

const Task = (props) => {
    return (
        <Box mb="16px">
            <Checkbox 
                colorScheme="blue" 
                size="lg"
                isChecked={props.isDone}
                onChange={() => {
                    props.toggleIsDone(props.index);
                }}
            >
                <Text>{props.name}</Text>
            </Checkbox>
        </Box>
    );
};

export default Task;