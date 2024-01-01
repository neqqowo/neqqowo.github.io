function checkText() {
      // Получение значения из поля ввода
    var inputValue = document.getElementById("myInput").value;

      // Проверка на совпадение с нужным текстом
    if (inputValue === "нуж") {
        // Отображение дополнительного контента
    document.getElementById("additionalContent").classList.remove("hidden");
    } else {
        // Скрытие дополнительного контента (если он отображен ранее)
    document.getElementById("additionalContent").classList.add("hidden");
    }
}
