import React from 'react'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

import Admonition from '@theme/Admonition'
import { reactrLanguages, reactrLanguageSupport } from '@site/reactr-lang.json'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'


/* Creates a new iteratable, ordered list of supported languages filtered by only the code blocks present in the component */
const getCodeBlockLangs = (children) =>
    reactrLanguages
        .filter(lang => !!getCodeBlockForLang(lang, children))
        .map(lang => reactrLanguageSupport[lang])

/* Finds the lang type of the code block in the supplied React component */
const getCodeBlockLangType = (component) => {
    /* Works with toplevel <CodeBlock> elements */
    if (component.props.mdxType === 'CodeBlock') return component.props.language
    /* Works with markdown fenced code blocks: ```lang ... */
    if (component.props.mdxType === 'pre' && component.props.children?.props.mdxType === 'code') return component.props.children.props.className.replace('language-','')
    /* TODO: divs? */
    return null
}

/* Returns from a list of Code Block children the one that corresponds with the selected language */
const getCodeBlockForLang = (lang, children) => {
    const langMap = new Map()
    React.Children.forEach(children, block => langMap.set(
        getCodeBlockLangType(block), block
    ))
    const component = langMap.get(lang)
    /* Allow the changing the effective syntax highlighting scheme using the 'highlight' field */
    if (component && reactrLanguageSupport[lang].highlighting) {
        /* Change highlighting for CodeBlock components */
        if (component.props.mdxType === 'CodeBlock') {
            /* Replace the component with a new one with an overridden language prop */
            return React.cloneElement(
                component,
                { language: reactrLanguageSupport[lang].highlighting }
            )
        }
        /* Change highlighting for markdown fenced code blocks */
        if (component.props.mdxType === 'pre' && component.props.children?.props.mdxType === 'code') {
            /* We clone the wrapper element untouched then change the embedded code block's highlighting in the className */
            return React.cloneElement(
                component, {},
                React.cloneElement(
                    component.props.children,
                    { className: 'language-'+reactrLanguageSupport[lang].highlighting }
                )
            )
        }
    }
    return component
}

const reactrLanguageStatusBadges = (status) => {
    if (status === "stable") {
        return <Link to={useBaseUrl('reactr/language-support#stable')}>
            <Admonition type="tip" title="STATUS: STABLE" />
        </Link>
    }
    if (status === "beta") {
        return <Link to={useBaseUrl('reactr/language-support#beta')}>
            <Admonition type="info" title="STATUS: BETA" />
        </Link>
    }
    if (status === "preview") {
        return <Link to={useBaseUrl('reactr/language-support#preview')}>
            <Admonition type="caution" title="STATUS: PREVIEW" />
        </Link>
    }
}

export const MultiLanguageCodeBlock = ({children}) => (
    <>
        <Tabs groupId="reactr-language" defaultValue={null}>
            {getCodeBlockLangs(children).map(
                ({lang,name,status}) =>
                    <TabItem
                        value={lang}
                        label={name}
                    >
                    {reactrLanguageStatusBadges(status)}
                    {getCodeBlockForLang(lang, children)}
                    </TabItem>
            )}
        </Tabs>
    </>
);
