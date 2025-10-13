import "./style.css";

const SUPABASE_URL = "https://enawfltvwlrubsaugcdj.supabase.co/rest/v1/Leads";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuYXdmbHR2d2xydWJzYXVnY2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3ODU5MzQsImV4cCI6MjA3NTM2MTkzNH0.fmMe2yS9ouMyWSZc7Ic40dhiLXytSWI_8IGjXisooc8";

const form = document.getElementById("leadForm");
const messageDiv = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const btnLoader = document.getElementById("btnLoader");

const dddInput = document.getElementById("ddd");
const numeroInput = document.getElementById("numero");

function showMessage(text, type) {
  messageDiv.textContent = text;
  messageDiv.className = `message ${type}`;
  messageDiv.classList.remove("hidden");

  setTimeout(() => {
    messageDiv.classList.add("hidden");
  }, 5000);
}

function setLoading(isLoading) {
  submitBtn.disabled = isLoading;

  if (isLoading) {
    btnText.classList.add("hidden");
    btnLoader.classList.remove("hidden");
  } else {
    btnText.classList.remove("hidden");
    btnLoader.classList.add("hidden");
  }
}

function formatPhoneInput(value) {
  return value.replace(/\D/g, "");
}

dddInput.addEventListener("input", (e) => {
  e.target.value = formatPhoneInput(e.target.value);
});

numeroInput.addEventListener("input", (e) => {
  e.target.value = formatPhoneInput(e.target.value);
});

async function submitLead(leadData) {
  const response = await fetch(SUPABASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Erro ao cadastrar lead");
  }

  return response;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const ddd = dddInput.value.trim();
  const numero = numeroInput.value.trim();

  if (!nome || !ddd || !numero) {
    showMessage("Por favor, preencha todos os campos", "error");
    return;
  }

  if (ddd.length !== 2) {
    showMessage("DDD deve ter 2 dígitos", "error");
    return;
  }

  if (numero.length < 8 || numero.length > 9) {
    showMessage("Número de telefone inválido", "error");
    return;
  }

  const telefone = `${ddd}${numero}`;

  const leadData = {
    nome: nome,
    telefone: telefone,
  };

  setLoading(true);

  try {
    await submitLead(leadData);
    showMessage("Lead cadastrado com sucesso!", "success");
    form.reset();
  } catch (error) {
    console.error("Erro:", error);
    showMessage(
      error.message || "Erro ao cadastrar lead. Tente novamente.",
      "error"
    );
  } finally {
    setLoading(false);
  }
});
