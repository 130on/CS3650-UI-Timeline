const mapClasses = (classes, classString) =>
    classString
        .split(' ')
        .map((className) => classes[className] || className)
        .join(' ');

export default mapClasses;