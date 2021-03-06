import React from 'react';

import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';
import Text from '../../foundation/Text';

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas Frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
];

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => {
                    return (
                        <li key={link.url}>
                            <Text
                                variant="smallestException"
                                tag="a"
                                href={link.url}
                            >
                                {link.texto}
                            </Text>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <Button ghost variant="secondary.main">
                    Entrar
                </Button>
                <Button variant="primary.main">
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    );
}
