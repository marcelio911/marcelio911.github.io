import React, { useEffect, useState } from 'react';
import './terminal.scss';
import { Terminal, 
    TerminalBar, 
    TerminalContent, 
    PointOfCode, 
    LineCode, 
    Cursor, 
    TerminalBarTitle,
    TerminalBg,
} from './styles';
import { useForm } from "react-hook-form";

interface Props {
    username?: string;
}

const TerminalView: React.FC<Props> = (props) => {
    const [textPointOfCode, setTextPointOfCode] = useState('marcelio@ubuntu:~$');
    const [allDataCommands, setAllDataCommands] = useState([
        'This is my personal webpage...',
        'Sorry 😕 I\'m still working on it!' ,
        'But it will here that you\'ll find my currents studies',
        'I\'ll posts here everything about my personal interests',        
        'That\'s all folks!! 😁😁😁😁😁😁'
    ]);
    // hooks
    const { register, handleSubmit, reset } = useForm();
    const [commandSamples, setCommandSamples] = useState(['Hello my friends!! ']);
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = window.setInterval(() => {
            setTime(prevTime => prevTime + 1); // <-- Change this line!
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, []);    
    const onEntryCommand = (data: {command: string}) => {
        commandSamples.push(data.command);
        setCommandSamples(commandSamples);
        reset({
            register: "bill"
          }, {
            keepErrors: true, 
            keepDirty: true,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
          });
    };

    const runViewCode = () => {
        if (allDataCommands && allDataCommands.length > 0) {
            commandSamples.push(allDataCommands[0]);
            allDataCommands.shift();
            setCommandSamples(commandSamples);
            setAllDataCommands(allDataCommands);
        }
    }

    useEffect(() => {
        setInterval(async () => {
            runViewCode();
        }, 3000);        
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        setTextPointOfCode(JSON.parse(JSON.stringify(props?.username)) + ':~$');
    }, [props])

    return (
        <Terminal className="terminal">
            <TerminalBar className="terminal_bar">
                <TerminalBarTitle>{textPointOfCode.replace('$', '')}{time}</TerminalBarTitle>
                <div className="btn_bar btn_one"></div>
                <div className="btn_bar btn_two"></div>
                <div className="btn_bar btn_three"></div>
            </TerminalBar>
            <TerminalContent className="terminal_content">
                <TerminalBg></TerminalBg>
                {commandSamples.map((textCodeSample, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={"commandSamples_" + idx}>
                        <PointOfCode className="terminal_point_of_command">{textPointOfCode}</PointOfCode>
                        <LineCode className="terminal_line_command line-1 anim-typewriter">{textCodeSample}</LineCode>
                        <div key={"break_" + idx} className="break"></div>
                        {idx === commandSamples.length - 1 && (
                             <div key={"lastLine_" + idx}>
                                <PointOfCode className="terminal_point_of_command">{textPointOfCode}</PointOfCode>
                                <LineCode className="terminal_line_command line-1">
                                    <form onSubmit={handleSubmit(onEntryCommand)} key={"enter_command" + idx}>
                                        <input {...register("command", { required: true })} />
                                        <input type="submit" className="hidden" />
                                    </form>
                                    <Cursor></Cursor>
                                </LineCode>
                            </div>
                        )}
                    </div>
                ))}
            </TerminalContent>
        </Terminal>
    );
};

export default TerminalView;
