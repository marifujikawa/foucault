import Header from "../components/header.js";
import '../App.css';

export default function Invoices() {
    const initialArray = [1, 5, 7, 2, 3, 5];
    const oddArray = initialArray.filter(item => item % 2 != 0);
    const evenArray = initialArray.filter(item => item % 2 == 0);
    const totalSum = initialArray.reduce((total, item) => total + item);

    function FormattedOutput(arr, label) {
        const outputArray = arr.map(item => <span>{item}</span>); //transforma o array para o formato desejado
        outputArray.push(" #"); //adiciona no final do array
        outputArray.unshift(label); //adiciona no inicio do array
        return outputArray;
    }

    return (
        <div>
            <div>
                {FormattedOutput(initialArray, "Array Original: ")}
            </div>
            <div>
                {FormattedOutput(oddArray, "Números Ímpares: ")}
            </div>
            <div>
                {FormattedOutput(evenArray, "Números pares: ")}
            </div>
            <div>
                Total: {totalSum} #
            </div>
        </div>
    );
}