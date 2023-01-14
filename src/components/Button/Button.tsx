import { ReactNode } from "react";
import { Button as ChButton }from "@chakra-ui/react";

export function Button (
    {children}:{children:ReactNode}
) {


    return <div><ChButton colorScheme='teal' >{children}</ChButton></div>
}