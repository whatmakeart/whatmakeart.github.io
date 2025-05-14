document.addEventListener("DOMContentLoaded", function () {
  // Make table headers sticky
  // This will apply sticky positioning to all table heads in responsive-table-markdown
  const style = document.createElement("style");
  style.innerHTML = `
        .responsive-table-markdown table {
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
        }

        .responsive-table-markdown table th, 
        .responsive-table-markdown table td {
            border: 1px solid #ccc;
            padding: 8px;
        }

        .responsive-table-markdown table thead th {
            position: sticky;
            top: 0;
            background: #f9f9f9;
            z-index: 2;
            text-align: center;
        }

        .responsive-table-markdown table td label {
            display: block;
            text-align: center;
            margin: 0 auto;
        }

        .responsive-table-markdown table td input[type="radio"] {
            margin: 0 auto;
            display: block;
        }
        
        /* Optional: Make sure tables are scrollable if large */
        .responsive-table-markdown {
            overflow-x: auto;
            width: 100%;
        }

        button#download-csv {
            margin-top: 20px;
            padding: 10px 20px;
            cursor: pointer;
            display: block;
        }
    `;
  document.head.appendChild(style);

  // Identify all tables within .responsive-table-markdown
  const tables = document.querySelectorAll(".responsive-table-markdown table");

  tables.forEach((table) => {
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");
    if (!thead || !tbody) return;

    // Get the column headers
    const headers = Array.from(thead.querySelectorAll("th")).map((th) =>
      th.innerText.trim()
    );

    // The first header is the item name, and the rest are categories
    const categories = headers.slice(1);

    // For each row (item), create radio buttons
    Array.from(tbody.querySelectorAll("tr")).forEach((tr) => {
      const cells = tr.querySelectorAll("td");
      if (cells.length < 2) return;

      // Extract item name
      let itemName = "";
      const firstCellLink = cells[0].querySelector("a");
      if (firstCellLink) {
        itemName = firstCellLink.innerText.trim();
      } else {
        itemName = cells[0].innerText.trim();
      }

      // Insert radio buttons into empty cells
      for (let i = 1; i < cells.length; i++) {
        const category = categories[i - 1];
        cells[i].innerHTML = ""; // Clear existing cell content
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = itemName;
        input.value = category;
        label.appendChild(input);
        cells[i].appendChild(label);
      }
    });
  });

  // Create and append the Download CSV button at the bottom of the page
  const downloadButton = document.createElement("button");
  downloadButton.type = "button";
  downloadButton.id = "download-csv";
  downloadButton.innerText = "Download CSV";

  // Insert the button after the last responsive-table-markdown section or at the bottom of the body
  const lastTableContainer = document.querySelectorAll(
    ".responsive-table-markdown"
  );
  if (lastTableContainer.length > 0) {
    lastTableContainer[lastTableContainer.length - 1].insertAdjacentElement(
      "afterend",
      downloadButton
    );
  } else {
    document.body.appendChild(downloadButton);
  }

  downloadButton.addEventListener("click", function () {
    // Collect data from all tables
    let csvContent = "data:text/csv;charset=utf-8,Category,Item,Response\n";

    tables.forEach((table) => {
      const thead = table.querySelector("thead");
      const tbody = table.querySelector("tbody");
      if (!thead || !tbody) return;

      // Determine category from a heading above the table if possible
      let category = "";
      let prev = table.previousElementSibling;
      while (prev) {
        if (
          (prev.tagName === "H2" || prev.tagName === "H3") &&
          prev.innerText.trim().length > 0
        ) {
          category = prev.innerText.trim();
          break;
        }
        prev = prev.previousElementSibling;
      }

      const rows = tbody.querySelectorAll("tr");
      rows.forEach((tr) => {
        const cells = tr.querySelectorAll("td");
        if (cells.length < 2) return;

        let itemName = "";
        const firstCellLink = cells[0].querySelector("a");
        if (firstCellLink) {
          itemName = firstCellLink.innerText.trim();
        } else {
          itemName = cells[0].innerText.trim();
        }

        // Find chosen radio button for this item
        const radios = tr.querySelectorAll("input[type=radio]");
        let chosen = "";
        radios.forEach((radio) => {
          if (radio.checked) chosen = radio.value;
        });

        csvContent += `"${category}","${itemName}","${chosen}"\n`;
      });
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "inventory_responses.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
