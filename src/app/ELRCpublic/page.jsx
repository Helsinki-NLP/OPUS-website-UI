import Link from "next/link";
import s from "./page.module.css";

const PAGE_SIZE = 20;

const entries = [
  { corpus: "ELRA-W0130", name: "ELRC_1013_English-Swedish parallel corpus from the translation", license: "CC-BY-2.5-SE" },
  { corpus: "ELRA-W0131", name: "ELRC_1015_Bilingual hr-en parallel corpus from Croatian", license: "openUnder-PSI" },
  { corpus: "ELRA-W0133", name: "ELRC_1055_Bilingual documents Bulgarian-English in the field", license: "openUnder-PSI" },
  { corpus: "ELRA-W0134", name: "ELRC_1056_Bilingual documents Bulgarian-English in the field", license: "openUnder-PSI" },
  { corpus: "ELRA-W0135", name: "ELRC_1058_Bilingual hr-en parallel corpus from the", license: "openUnder-PSI" },
  { corpus: "ELRA-W0136", name: "ELRC_1072_English-Slovak corpus of annual reports on", license: "openUnder-PSI" },
  { corpus: "ELRA-W0137", name: "ELRC_1073_English-Slovak corpus of annual reports from", license: "openUnder-PSI" },
  { corpus: "ELRA-W0138", name: "ELRC_1075_EUIPO - IP case law French-English", license: "publicDomain" },
  { corpus: "ELRA-W0142", name: "ELRC_1080_Croatian-English corpus with Acts on Biological", license: "openUnder-PSI" },
  { corpus: "ELRA-W0143", name: "ELRC_1092_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0144", name: "ELRC_1093_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0145", name: "ELRC_1094_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0146", name: "ELRC_1095_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0147", name: "ELRC_1096_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0148", name: "ELRC_1098_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0149", name: "ELRC_1100_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0150", name: "ELRC_1101_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0151", name: "ELRC_1102_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0152", name: "ELRC_1104_EUIPO - list of goods and", license: "publicDomain" },
  { corpus: "ELRA-W0154", name: "ELRC_393_Parallel corpus from Estonian Cabinet of", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0156", name: "ELRC_396_Translation memories from The Ministry of", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0157", name: "ELRC_397_DA-EN Danish Ministry of Higher Education", license: "CC-BY-NC-4.0" },
  { corpus: "ELRA-W0158", name: "ELRC_399_International Agreements (Processed)", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0159", name: "ELRC_402_Parallel Corpus from the Web Site", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0160", name: "ELRC_405_Website of the President of the", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0164", name: "ELRC_419_Greek anti-corruption legislation and National Anti-Corruption", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0165", name: "ELRC_425_Translations of Lithuanian legislation from Seimas", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0167", name: "ELRC_429_Legal texts from Estonian Ministry of", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0168", name: "ELRC_431_Parallel corpus from Estonian Ministry of", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0169", name: "ELRC_433_Corpus of State-related content from the", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0170", name: "ELRC_435_Romanian – English New Criminal Procedure", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0173", name: "ELRC_471_Bilingual Bulgarian-English corpus from the National", license: "publicDomain" },
  { corpus: "ELRA-W0174", name: "ELRC_472_Central Statistical Office Dataset (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0175", name: "ELRC_473_PKN Orlen Dataset (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0176", name: "ELRC_474_Natolin European Centre Dataset (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0177", name: "ELRC_475_Polish Food Dataset (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0178", name: "ELRC_477_National Health Fund Dataset (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0180", name: "ELRC_479_Polish Food Dataset 2 (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0181", name: "ELRC_480_Polish Food DataSet 3 (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0182", name: "ELRC_481_Polish Ministry of Foreign Affairs Regional", license: "openUnder-PSI" },
  { corpus: "ELRA-W0183", name: "ELRC_482_Polish Ministry of Foreign Affairs Historical", license: "openUnder-PSI" },
  { corpus: "ELRA-W0184", name: "ELRC_483_Polish Ministry of Foreign Affairs Youth", license: "openUnder-PSI" },
  { corpus: "ELRA-W0185", name: "ELRC_484_Public Procurement Dataset 2 (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0186", name: "ELRC_485_Civil Aviation Regulations (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0187", name: "ELRC_486_Public Procurement Dataset 1 (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0188", name: "ELRC_487_English-Slovak parallel corpus of texts from", license: "publicDomain" },
  { corpus: "ELRA-W0189", name: "ELRC_488_English-Slovak parallel corpus of texts from", license: "publicDomain" },
  { corpus: "ELRA-W0190", name: "ELRC_489_Secretariat-General parallel corpus SL-EN and EN-SL", license: "publicDomain" },
  { corpus: "ELRA-W0191", name: "ELRC_490_Secretariat-General parallel corpus SL-EN and EN-SL", license: "publicDomain" },
  { corpus: "ELRA-W0192", name: "ELRC_491_Romanian - English literature corpus (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0193", name: "ELRC_492_General Romanian-English bilingual corpus (Processed)", license: "CC-BY-SA-3.0" },
  { corpus: "ELRA-W0194", name: "ELRC_493_Romanian - English news corpus (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0195", name: "ELRC_494_English-Norwegian parallel corpus from Forbruker Europa,", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0196", name: "ELRC_496_Convention on the transfer of sentenced", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0197", name: "ELRC_630_BMVI Publications (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0198", name: "ELRC_631_BMVI Website (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0199", name: "ELRC_633_BMI Brochures and Website 2016 (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0200", name: "ELRC_634_BMI Brochures 2011-2015 (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0201", name: "ELRC_638_Luxembourg Museum Websites (de-en) (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0202", name: "ELRC_645_Parallel Global Voices (Greek - English)", license: "CC-BY-3.0" },
  { corpus: "ELRA-W0203", name: "ELRC_649_Parallel corpus (Greek - English) in", license: "openUnder-PSI" },
  { corpus: "ELRA-W0204", name: "ELRC_651_Bilingual Croatian-English Parallel Corpus (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0205", name: "ELRC_652_Parallel corpus (Greek - English) in", license: "publicDomain" },
  { corpus: "ELRA-W0206", name: "ELRC_654_Romanian Ombudsman archive (Processed)", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0207", name: "ELRC_656_Macroeconomic Developments (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0208", name: "ELRC_658_Methodological Reconciliation (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0209", name: "ELRC_662_Expression of interest (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0210", name: "ELRC_663_Memorandum for a ESM programme (Processed)", license: "publicDomain" },
  { corpus: "ELRA-W0211", name: "ELRC_664_Parallel corpus (Bulgarian - English) in", license: "openUnder-PSI" },
  { corpus: "ELRA-W0212", name: "ELRC_674_Parallel corpus (Polish - English) from", license: "openUnder-PSI" },
  { corpus: "ELRA-W0213", name: "ELRC_712_Parallel corpus from Social Insurance Agency", license: "publicDomain" },
  { corpus: "ELRA-W0214", name: "ELRC_713_English-Danish Parallel corpus from Tatoeba project", license: "CC-BY-2.0" },
  { corpus: "ELRA-W0215", name: "ELRC_714_Parallel corpus from Parliament of Estonia", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0216", name: "ELRC_715_Corpus on Finance and Economics from", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0217", name: "ELRC_716_English-Finnish corpus from Finnish Information Bank", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0218", name: "ELRC_717_English-Estonian corpus from Finnish Information Bank", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0220", name: "ELRC_724_Hallituskausi 2007-2011 -- Finnish-English Translation Memory", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0221", name: "ELRC_725_Hallituskausi 2011-2015 -- Finnish-English Translation Memory", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0222", name: "ELRC_744_English-Swedish corpus from Finnish Information Bank", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0223", name: "ELRC_781_The Gaois bilingual corpus of English-Irish", license: "openUnder-PSI" },
  { corpus: "ELRA-W0224", name: "ELRC_784_The Coimisineir Teanga Bilingual Corpus of", license: "openUnder-PSI" },
  { corpus: "ELRA-W0225", name: "ELRC_785_Compendium The Social Insurance Institution (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0226", name: "ELRC_788_Bilingual hr-en parallel corpus from Croatian", license: "openUnder-PSI" },
  { corpus: "ELRA-W0227", name: "ELRC_793_ENGLISH_POLISH PHRASE BOOK FOR ADMINISTRATIVE STAFF", license: "openUnder-PSI" },
  { corpus: "ELRA-W0228", name: "ELRC_798_Financial Stability Reports from the National", license: "publicDomain" },
  { corpus: "ELRA-W0229", name: "ELRC_799_Financial Stability Reports from the National", license: "publicDomain" },
  { corpus: "ELRA-W0230", name: "ELRC_801_The Coimisineir Teanga Bilingual Corpus of", license: "openUnder-PSI" },
  { corpus: "ELRA-W0232", name: "ELRC_806_Maltese-English website parallel corpus (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0233", name: "ELRC_807_Malta Government Gazette (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0234", name: "ELRC_808_Laws of Malta (Processed)", license: "openUnder-PSI" },
  { corpus: "ELRA-W0235", name: "ELRC_813_Polish Ministry of Foreign Affairs reports", license: "openUnder-PSI" },
  { corpus: "ELRA-W0238", name: "ELRC_825_English - Croatian parallel corpus from", license: "openUnder-PSI" },
  { corpus: "ELRA-W0239", name: "ELRC_829_English-Swedish parallel corpus from the web", license: "publicDomain" },
  { corpus: "ELRA-W0241", name: "ELRC_834_Parallel Global Voices (English - Polish)", license: "CC-BY-3.0" },
  { corpus: "ELRA-W0242", name: "ELRC_841_Employment in Poland 2009 report in", license: "openUnder-PSI" },
  { corpus: "ELRA-W0243", name: "ELRC_842_Quarterly Reports of the Parliamentary Budget", license: "openUnder-PSI" },
  { corpus: "ELRA-W0244", name: "ELRC_843_Bilingual collection of reports of the", license: "CC-BY-SA-4.0" },
  { corpus: "ELRA-W0246", name: "ELRC_853_Portuguese-English bilingual corpus from the Portuguese", license: "openUnder-PSI" },
  { corpus: "ELRA-W0247", name: "ELRC_858_Parallel corpus (en-pl) from the Export", license: "openUnder-PSI" },
  { corpus: "ELRA-W0249", name: "ELRC_864_Parallel corpus from the website of", license: "openUnder-PSI" },
  { corpus: "ELRA-W0251", name: "ELRC_869_Polish-English parallel corpus from the website", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0252", name: "ELRC_871_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0253", name: "ELRC_873_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0254", name: "ELRC_876_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0255", name: "ELRC_878_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0256", name: "ELRC_880_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0257", name: "ELRC_882_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0258", name: "ELRC_884_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0259", name: "ELRC_888_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0260", name: "ELRC_898_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0261", name: "ELRC_906_Polish-English parallel corpus from the website", license: "CC-BY-3.0" },
  { corpus: "ELRA-W0262", name: "ELRC_910_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0263", name: "ELRC_913_Bilingual Bulgarian-English corpus from the 2018", license: "openUnder-PSI" },
  { corpus: "ELRA-W0264", name: "ELRC_915_Croatian-English corpus with statistical reports and", license: "openUnder-PSI" },
  { corpus: "ELRA-W0265", name: "ELRC_919_English-Estonian Parallel corpus compiled from translated", license: "openUnder-PSI" },
  { corpus: "ELRA-W0266", name: "ELRC_921_Croatian-English corpus with studies on the", license: "openUnder-PSI" },
  { corpus: "ELRA-W0267", name: "ELRC_924_Slovenian-English corpus with statistical reports from", license: "openUnder-PSI" },
  { corpus: "ELRA-W0270", name: "ELRC_930_Romanian-English corpus with studies, reports and", license: "openUnder-PSI" },
  { corpus: "ELRA-W0271", name: "ELRC_932_Hellenic Ministry of Foreign Affairs Greek-English", license: "openUnder-PSI" },
  { corpus: "ELRA-W0272", name: "ELRC_936_Greek-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0273", name: "ELRC_943_Bilingual hr-en parallel corpus from the", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0274", name: "ELRC_945_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0275", name: "ELRC_947_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0276", name: "ELRC_949_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0277", name: "ELRC_951_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0278", name: "ELRC_953_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0279", name: "ELRC_956_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0280", name: "ELRC_958_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0281", name: "ELRC_960_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0282", name: "ELRC_962_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0283", name: "ELRC_966_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0284", name: "ELRC_968_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0285", name: "ELRC_970_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0286", name: "ELRC_973_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0287", name: "ELRC_975_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0288", name: "ELRC_977_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0289", name: "ELRC_979_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0290", name: "ELRC_981_Polish-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0291", name: "ELRC_984_Croatian-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0292", name: "ELRC_986_Croatian-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0293", name: "ELRC_989_Croatian-English parallel corpus from the website", license: "openUnder-PSI" },
  { corpus: "ELRA-W0294", name: "ELRC_991_Croatian-English parallel corpus from the website", license: "CC-BY-ND-3.0" },
  { corpus: "ELRA-W0297", name: "ELRC_997_Parallel Global Voices (Bulgarian - English)", license: "CC-BY-3.0" },
  { corpus: "ELRA-W0301", name: "ELRC_403_Letter of rights for persons arrested", license: "CC-BY-4.0" },
  { corpus: "ELRA-W0305", name: "ELRC_436_Parallel texts from Swedish National Food", license: "publicDomain" },
  { corpus: "ELRA-W0307", name: "ELRC_646_Trilingual Documents related to International Judicial", license: "publicDomain" },
  { corpus: "ELRA-W0308", name: "ELRC_648_Letter of rights for persons arrested", license: "openUnder-PSI" },
  { corpus: "ELRA-W0309", name: "ELRC_745_Convention against Torture and Other Cruel,", license: "publicDomain" },
];

export default async function ELRCPublic({ searchParams }) {
  const { page: pageParam } = (await searchParams) ?? {};
  const totalPages = Math.ceil(entries.length / PAGE_SIZE);
  const requestedPage = Number(pageParam);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage > 0
      ? Math.min(requestedPage, totalPages)
      : 1;
  const start = (currentPage - 1) * PAGE_SIZE;
  const visibleEntries = entries.slice(start, start + PAGE_SIZE);
  const pageHref = (pageNumber) => `/ELRCpublic?page=${pageNumber}`;

  return (
    <div className={s.ELRCpublicContainer}>
      <h1>ELRC public data sets</h1>
      <div className={s.tableContainer}>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th>Link</th>
              <th>Name</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody>
            {visibleEntries.map(({ corpus, name, license }, index) => (
              <tr key={corpus}>
                <td>{start + index + 1}</td>
                <td>
                  <Link href={`/datasets/${corpus}`}>{corpus}</Link>
                </td>
                <td>{name}</td>
                <td>{license}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav className={s.pagination} aria-label="ELRC table pages">
        <span className={s.pageSummary}>
          Showing {start + 1}–{start + visibleEntries.length} of {entries.length}
        </span>
        <div className={s.pageLinks}>
          {currentPage > 1 && (
            <Link className={s.pageLink} href={pageHref(currentPage - 1)}>
              Previous
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) =>
              pageNumber === currentPage ? (
                <span
                  key={pageNumber}
                  className={s.currentPage}
                  aria-current="page"
                >
                  {pageNumber}
                </span>
              ) : (
                <Link
                  key={pageNumber}
                  className={s.pageLink}
                  href={pageHref(pageNumber)}
                >
                  {pageNumber}
                </Link>
              ),
          )}
          {currentPage < totalPages && (
            <Link className={s.pageLink} href={pageHref(currentPage + 1)}>
              Next
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
