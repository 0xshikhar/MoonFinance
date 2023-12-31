import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Hero from '../components/Hero';
import { useFetchPrices } from '../hooks/useFetchPrices';
import { assetToImage, assetToName, symbolToCoingeckoId } from '../utils/misc';
// import { commodityToImage, commodityToName, commodityHomePageCurrentData, commodityHomePageYearData } from '../utils/marketData';
import { useRouter } from 'next/router';
import { useNetwork } from 'wagmi';
import { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const Container = styled.div`
	background-color: #000000;
	color: #ffffff;
	display: grid;
	grid-template-columns: 4fr 7fr;
	justify-content: center;
	gap: 3rem;
	padding: 1.5rem;
	padding-bottom: 2.5rem;

	@media (max-width: 1540px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		padding-top: 1rem;
	}
`;

const homepageAssetsSymbols = [
	{ symbol: 'verse', mainnet: true, testnet: true, hide: false },
	{ symbol: 'eth', mainnet: true, testnet: true, hide: false },
	{ symbol: 'btc', mainnet: true, testnet: true, hide: false },
	{ symbol: 'matic', mainnet: true, testnet: true, hide: false },
	{ symbol: 'usdc', mainnet: true, testnet: true, hide: false },
	{ symbol: 'link', mainnet: true, testnet: false, hide: false },
	{ symbol: 'usdt', mainnet: true, testnet: false, hide: false },
	{ symbol: 'sol', mainnet: true, testnet: false, hide: false },
	{ symbol: 'avax', mainnet: true, testnet: false, hide: false },
	{ symbol: 'yfi', mainnet: true, testnet: false, hide: false },
	{ symbol: 'crv', mainnet: true, testnet: false, hide: false },
	{ symbol: 'aave', mainnet: true, testnet: false, hide: false },
	{ symbol: 'ada', mainnet: true, testnet: false, hide: false },
	{ symbol: 'snx', mainnet: true, testnet: false, hide: false },
	{ symbol: 'uni', mainnet: true, testnet: false, hide: false },
	{ symbol: 'bnb', mainnet: true, testnet: false, hide: false },
	{ symbol: 'dot', mainnet: true, testnet: false, hide: false },
	{ symbol: 'sushi', mainnet: true, testnet: false, hide: true },
	{ symbol: 'ltc', mainnet: true, testnet: false, hide: true },
	{ symbol: 'fil', mainnet: true, testnet: false, hide: true },
	{ symbol: 'doge', mainnet: true, testnet: false, hide: true },
];

const homepageCommoditySymbols = [
	{ symbol: 'index', mainnet: true, testnet: true, hide: false },
	{ symbol: 'food', mainnet: true, testnet: true, hide: false },
	{ symbol: 'housing', mainnet: true, testnet: true, hide: false },
	{ symbol: 'vehicle', mainnet: true, testnet: true, hide: false },
	{ symbol: 'communication', mainnet: true, testnet: true, hide: false },
	{ symbol: 'education', mainnet: true, testnet: true, hide: false },
	{ symbol: 'ukindex', mainnet: true, testnet: true, hide: false },
];


const homepageAssetsIds = [
	symbolToCoingeckoId['verse'],
	symbolToCoingeckoId['eth'],
	symbolToCoingeckoId['btc'],
	symbolToCoingeckoId['matic'],
	symbolToCoingeckoId['link'],
	symbolToCoingeckoId['usdt'],
	symbolToCoingeckoId['usdc'],
	symbolToCoingeckoId['sol'],
	symbolToCoingeckoId['avax'],
	symbolToCoingeckoId['yfi'],
	symbolToCoingeckoId['crv'],
	symbolToCoingeckoId['aave'],
	symbolToCoingeckoId['ada'],
	symbolToCoingeckoId['snx'],
	symbolToCoingeckoId['uni'],
	symbolToCoingeckoId['bnb'],
	symbolToCoingeckoId['dot'],
	symbolToCoingeckoId['sushi'],
	symbolToCoingeckoId['ltc'],
	symbolToCoingeckoId['fil'],
	symbolToCoingeckoId['doge'],
];

const Home: NextPage = () => {
	const router = useRouter();
	const { prices } = useFetchPrices(homepageAssetsIds);
	// const { chain } = useNetwork();

	const formatPrice = (price: number) => {
		let priceStr = price.toFixed(20);
		let processedPrice = priceStr.slice(0, 7);
		if (processedPrice[processedPrice.length - 1] === '.') {
			processedPrice += price.toFixed(20).slice(7, 8);
		}
		return processedPrice;
	};

	const handleClick = (symbol: string) => {
		router.push(`/trade?asset=${symbol}`);
	};

	const handleCommodityClick = (symbol: string) => {
		router.push(`/commodity/trade?asset=${symbol}`);
	};

	const [isSSR, setIsSSR] = useState(true);


	useEffect(() => {
		setIsSSR(false);
	}, []);

	return (
		<div>
			<Hero/>
			<div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black'>
				<div className="grid mb-0 pt-10 pb-5 mt-0 md:mb-10 md:grid-cols-2 ">
					<figure className="flex flex-col items-center justify-center pt-10 ">

						<div className="text-center align-middle w-[600px] h-[360px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
								Decentralized Exchange</div>
							<p className='text-white pb-5'> You can swap any token using Chain Finance DEX</p>
							<Link href="/swap">
								<div className="inline-flex justify-center align-middle items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Swap Your Tokens
									<BsFillArrowRightCircleFill className="ml-3" />
								</div>
							</Link>

						</div>
					</figure>

					<figure className="flex flex-col items-center justify-center pt-10 ">
						<div className="text-center align-middle w-[600px] h-[360px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
								Bank Payment</div>
							<p className='text-white pb-5'> You can swap any token using Chain Finance DEX</p>
							<Link href="/bank/transfer">
								<div className="inline-flex justify-center align-middle items-center m-2 p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Bank Transfer
									<BsFillArrowRightCircleFill className="ml-3" />							</div>
							</Link>
							<Link href="/bank/pay">
								<div className="inline-flex justify-center align-middle m-2 items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Fiat Payment
									<BsFillArrowRightCircleFill className="ml-3" />							</div>
							</Link>
						</div>
					</figure>
				</div>
				<div className="grid mb-0 pt-1 pb-[80px] mt-0 md:grid-cols-2 ">
					<figure className="flex flex-col items-center justify-center pt-10 ">

						<div className="text-center align-middle w-[600px] h-[400px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
								Prediction Market</div>
							<p className='text-white pb-5'>
								Chain Finance Prediction Market is built on Ethereum Chain. At the moment the markets are for cryptocurrencies, but in the future they could be for anything. Everyone can create
								markets, and everyone can take markets!								 </p>
							<Link href="/create">
								<div className="inline-flex justify-center align-middle items-center m-2 p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Create Market
									<BsFillArrowRightCircleFill className="ml-3" />							</div>
							</Link>
							<Link href="/trade">
								<div className="inline-flex justify-center align-middle m-2 items-center p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Take Market
									<BsFillArrowRightCircleFill className="ml-3" />							</div>
							</Link>

						</div>
					</figure>

					<figure className="flex flex-col items-center justify-center pt-10 ">
						<div className="text-center align-middle w-[600px] h-[400px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<div className="md:mt-4 md:mb-8 mb-4 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
								Lottery Platform
							</div>

							<p className='text-white pb-5'> It is a unique lottery generating platform built using **Space & Time** to create dynamic NFT for the winner users.
								Winner will be selected on basis of closest bid of Prediction Market Value of Verse Token</p>
							<Link href="/bank/transfer">
								<div className="inline-flex justify-center align-middle items-center m-2 p-5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Try Your Luck
									<BsFillArrowRightCircleFill className="ml-3" />							</div>
							</Link>
						</div>
					</figure>
				</div>
			</div>

			<Container>
				<Boxes>
					{homepageAssetsSymbols.map(asset => {
						return (
							<Box
								onClick={
									asset.testnet
										? () => handleClick(asset.symbol)
										: () => { }
								}
								key={asset.symbol}
								clickable={asset.testnet}
								hide={asset.hide}
							>
								<div className="top">
									<img src={assetToImage[asset.symbol]} alt={asset.symbol} />
									<div>
										<p className="head">
											{assetToName[asset.symbol]}
											{!isSSR && !asset.testnet ? (
												<span>mainnet only</span>
											) : null}
										</p>
										<p className="small">{asset.symbol.toUpperCase()}</p>
									</div>
								</div>
								<div className="bottom">
									{prices && prices[symbolToCoingeckoId[asset.symbol]] && (
										<>
											<p>${formatPrice(prices[symbolToCoingeckoId[asset.symbol]].usd)}</p>
											<p>
												24H:{' '}
												{prices[symbolToCoingeckoId[asset.symbol]].usd_24h_change.toFixed(
													2
												)}
												%
											</p>
										</>
									)}
								</div>
							</Box>
						);
					})}
				</Boxes>

			</Container>

			{/* for commodities and index */}

			<Bottom>
				<div className="header">
					<p>A Prediction Market on Polygon PoS network</p>
				</div>
				<div className="largebox">
					<div className="box">
						<p className="header">~30 different crypto markets</p>
						<p>
							Currently, Chain Finance has support for ~30 different crypto markets. In the future, it&apos;s
							possible that we&apos;ll add more markets and the markets are not limited to
							cryptocurrencies.
						</p>
					</div>
					<div className="box">
						<p className="header">Price feeds from Chainlink</p>
						<p>
							Every pricefeed on Chain Finance is from{' '}
							<div href="https://chain.link" target="_blank" rel="noreferrer">
								Chainlink
							</div>
							, a decentralized oracle network. For example, here is the MATIC/USD pricefeed on Polygon
							mainnet:{' '}
							<div
								href="https://data.chain.link/polygon/mainnet/crypto-usd/matic-usd"
								target="_blank"
								rel="noreferrer"
							>
								MATIC/USD
							</div>
						</p>
					</div>
					<div className="box hackathon">
						<p className="header">Hackathon 2022 Participant</p>
						<p>
							Chain Finance is currently participating in the Polygon #BUIDL IT Hackathon. A link to our
							devpost submission can be found at{' '}
							<div href="https://devpost.com" target="_blank" rel="noreferrer">
								devpost.com
							</div>
							.
						</p>
					</div>
				</div>
			</Bottom>
		</div>

	);
};

const Boxes = styled.div`
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
			gap: 1rem;

			@media (max-width: 1800px) {
				grid - template - columns: 1fr 1fr 1fr 1fr;
	}
			@media (max-width: 1050px) {
				grid - template - columns: 1fr 1fr 1fr;
	}
			@media (max-width: 750px) {
				grid - template - columns: 1fr 1fr;
	}

			@media (max-width: 600px) {
				grid - template - columns: 1fr;
	}
			`;

const Box = styled.div<{ clickable: boolean; hide: boolean }>`
			@media (max-width: 1800px) {
				display: ${({ hide }) => (hide ? 'none' : '')};
	}
			padding: 1.5rem;
			border-radius: 1rem;
			border: 2px solid ${({ theme }) => theme.background.quinary};
			width: 235px;

			@media (max-width: 600px) {
				width: 400px;
	}
			display: flex;
			gap: 1.5rem;
			flex-direction: column;

			cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
			position: relative;
			.top {
				display: flex;
			gap: 0.5rem;
			div {
				display: flex;
			flex-direction: column;
			gap: 0.1rem;
			p {
				font - size: ${({ theme }) => theme.typeScale.paragraph};
			font-weight: 500;
			}
			.small {
				font - size: ${({ theme }) => theme.typeScale.helperText};
			color: ${({ theme }) => theme.text.secondary};
			font-weight: 400;
			}
		}
			img {
				height: 35px;
			width: 35px;
		}
	}
			.bottom {
				display: flex;
			justify-content: space-between;
	}

			.head {
				span {
				font - size: 0.65rem;
			position: absolute;
			top: 1rem;
			right: 1rem;
		}
	}

			:hover {
				border: 2px solid ${({ theme }) => theme.colors.primary};
	}

			&.hide {
		@media (max-width: 1540px) {
				display: none;
		}
	}
			`;


const Bottom = styled.div`
			padding: 0 2rem;
			background-color: ${({ theme }) => theme.background.secondary};
			color: ${({ theme }) => theme.text.secondary};
			height: 300px;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			.header {
				width: 100%;
			max-width: 1400px;
			p {
				color: ${({ theme }) => theme.colors.primary};
			padding-top: 2rem;
			font-size: ${({ theme }) => theme.typeScale.header1};
			font-weight: 500;
		}
	}
			.largebox {
				display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2rem;
			width: 100%;
			max-width: 1400px;
			overflow-y: scroll;
			.box {
				overflow - y: scroll;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			line-height: 1.5rem;
			.header {
				font - size: ${({ theme }) => theme.typeScale.header4};
			font-weight: 500;
			}
			a {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
			@media (max-width: 1100px) {
				grid - template - columns: 1fr 1fr;
		}

			.hackathon {
			@media (max-width: 1100px) {
				display: none;
			}
		}
	}
			`;

export default Home;
