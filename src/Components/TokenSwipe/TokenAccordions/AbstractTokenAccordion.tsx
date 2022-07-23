import { isERC1155, isERC20, isERC721, Token } from '../../../Types/Token';
import { TokenType } from '../../../Types';
import ERC20TokenAccordion from './ERC20TokenAccordion';
import ERC721TokenAccordion from './ERC721TokenAccordion';
import ERC1155TokenAccordion from './ERC1155TokenAccordion';

export interface AbstractTokenAccordionProps
{
    token: Token;
    tokenType: TokenType;
    isExpanded: boolean;
    isDisabled: boolean;
    onSave: () => void;
    onDismiss: () => void;
}

export default function AbstractTokenAccordion(props: AbstractTokenAccordionProps): JSX.Element
{
    if (props.tokenType === "ERC20" && isERC20(props.token))
    {
        return (
            <ERC20TokenAccordion
                {...props}
                token={props.token}
            />
        );
    }
    if (props.tokenType === "ERC721" && isERC721(props.token))
    {
        return (
            <ERC721TokenAccordion
                {...props}
                token={props.token}
            />
        );
    }
    if (props.tokenType === "ERC1155" && isERC1155(props.token))
    {
        return (
            <ERC1155TokenAccordion
                {...props}
                token={props.token}
            />
        );
    }

    return <div>Unknown token type</div>;
}
