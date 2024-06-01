import { Checkbox, Flex, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const Task = (props) => {
    return (
        <Flex mb="16px" justifyContent="space-between" alignItems="center">
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
            <DeleteIcon onClick={() => props.destroyTask(props.id)} />
        </Flex>
    );
};

export default Task;