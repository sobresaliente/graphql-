interface Props {
    children: React.ReactNode
}

//@TODO: check maybe styles can be applied here. Check shadcn
const TypographyH1: React.FC<Props> = ({ children }) => {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export default TypographyH1
